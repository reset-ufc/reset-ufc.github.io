# Documentação: CRUD de Usuários

Esta documentação explica como foi implementado o CRUD (Create, Read, Update, Delete) completo de usuários na API do ResetLab.

---
## Visão Geral

O CRUD de usuários foi implementado seguindo os padrões do NestJS e as práticas já estabelecidas no projeto. A implementação inclui:

- ✅ **CREATE**: Criar novos usuários
- ✅ **READ**: Listar todos os usuários (com paginação) e buscar por ID
- ✅ **UPDATE**: Atualizar informações do usuário
- ✅ **DELETE**: Deletar usuários

---

**Campos:**
- `id`: Identificador único (ObjectId do MongoDB)
- `email`: Email do usuário (único)
- `password`: Senha criptografada
- `news`: Relação com notícias criadas pelo usuário

---


**Validações:**
- `email`: Deve ser um email válido
- `password`: Deve ser uma string não vazia

### UpdateUserDto

```typescript
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
```

**Características:**
- Herda todos os campos de `CreateUserDto`
- Todos os campos são opcionais (usando `PartialType`)
- Permite atualizar apenas os campos desejados

---

## Service Layer

O `UsersService` contém toda a lógica de negócio. Vamos analisar cada método:

### 1. `create(createUserDto: CreateUserDto)`

Cria um novo usuário no banco de dados.

**Funcionalidades:**
- Verifica se o email já existe (evita duplicatas)
- Criptografa a senha usando `bcryptjs`
- Retorna o usuário criado (sem a senha)

**Código:**

```typescript
async create(createUserDto: CreateUserDto) {
  // Verifica se o email já existe
  const existingUser = await this.prisma.user.findUnique({
    where: { email: createUserDto.email },
  });

  if (existingUser) {
    throw new ConflictException('Email já está em uso');
  }

  const hashedPassword = bcrypt.hashSync(createUserDto.password, 10);
  const user = await this.prisma.user.create({
    data: {
      email: createUserDto.email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
}
```

### 2. `findAll(page: number, limit: number)`

Lista todos os usuários com paginação.

**Parâmetros:**
- `page`: Número da página (padrão: 1)
- `limit`: Quantidade de itens por página (padrão: 10)

**Retorno:**
```typescript
{
  data: User[],
  meta: {
    total: number,
    page: number,
    limit: number,
    totalPages: number
  }
}
```

**Código:**

```typescript
async findAll(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;

  const [users, total] = await Promise.all([
    this.prisma.user.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }),
    this.prisma.user.count(),
  ]);

  return {
    data: users,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}
```

### 3. `findOne(id: string)`

Busca um usuário específico por ID.

**Validações:**
- Verifica se o usuário existe
- Lança `NotFoundException` se não encontrar

**Código:**

```typescript
async findOne(id: string) {
  const user = await this.prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new NotFoundException('Usuário não encontrado');
  }

  return user;
}
```

### 4. `update(id: string, updateUserDto: UpdateUserDto)`

Atualiza um usuário existente.

**Funcionalidades:**
- Verifica se o usuário existe
- Valida se o novo email não está em uso (se estiver atualizando o email)
- Criptografa a senha se estiver sendo atualizada
- Retorna o usuário atualizado (sem a senha)

**Código:**

```typescript
async update(id: string, updateUserDto: UpdateUserDto) {
  // Verifica se o usuário existe
  const user = await this.prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new NotFoundException('Usuário não encontrado');
  }

  // Se está tentando atualizar o email, verifica se já existe
  if (updateUserDto.email && updateUserDto.email !== user.email) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: updateUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }
  }

  // Se está atualizando a senha, faz o hash
  const updateData: any = { ...updateUserDto };
  if (updateUserDto.password) {
    updateData.password = bcrypt.hashSync(updateUserDto.password, 10);
  }

  const updatedUser = await this.prisma.user.update({
    where: { id },
    data: updateData,
    select: {
      id: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return updatedUser;
}
```

### 5. `remove(id: string)`

Remove um usuário do banco de dados.

**Validações:**
- Verifica se o usuário existe antes de deletar
- Lança `NotFoundException` se não encontrar

**Código:**

```typescript
async remove(id: string) {
  // Verifica se o usuário existe
  const user = await this.prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new NotFoundException('Usuário não encontrado');
  }

  await this.prisma.user.delete({
    where: { id },
  });

  return { message: 'Usuário deletado com sucesso' };
}
```

---

## Controller Layer

O `UsersController` define os endpoints HTTP e aplica as validações e autenticação necessárias.

### Endpoints Implementados

#### 1. POST `/users` - Criar Usuário

```typescript
@Post()
@ApiOperation({ summary: 'Criar um novo usuário' })
@ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
@ApiResponse({ status: 409, description: 'Email já está em uso' })
async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  return await this.usersService.create(createUserDto);
}
```

**Características:**
- ✅ Público (não requer autenticação)
- ✅ Validação automática do DTO
- ✅ Documentação Swagger

#### 2. GET `/users` - Listar Usuários

```typescript
@Get()
@ApiOperation({ summary: 'Listar todos os usuários' })
@ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' })
async findAll(
  @Query('page') page: string = '1',
  @Query('limit') limit: string = '10',
) {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  return await this.usersService.findAll(pageNumber, limitNumber);
}
```

**Características:**
- ✅ Público (não requer autenticação)
- ✅ Suporta paginação via query parameters
- ✅ Documentação Swagger

#### 3. GET `/users/:id` - Buscar Usuário por ID

```typescript
@Get(':id')
@ApiOperation({ summary: 'Buscar um usuário por ID' })
@ApiResponse({ status: 200, description: 'Usuário encontrado' })
@ApiResponse({ status: 404, description: 'Usuário não encontrado' })
async findOne(@Param('id') id: string) {
  return await this.usersService.findOne(id);
}
```

**Características:**
- ✅ Público (não requer autenticação)
- ✅ Documentação Swagger

#### 4. PATCH `/users/:id` - Atualizar Usuário

```typescript
@Patch(':id')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiOperation({ summary: 'Atualizar um usuário' })
@ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
@ApiResponse({ status: 404, description: 'Usuário não encontrado' })
@ApiResponse({ status: 409, description: 'Email já está em uso' })
async update(
  @Param('id') id: string,
  @Body(ValidationPipe) updateUserDto: UpdateUserDto,
) {
  return await this.usersService.update(id, updateUserDto);
}
```

**Características:**
- 🔒 **Protegido** (requer autenticação JWT)
- ✅ Validação automática do DTO
- ✅ Documentação Swagger com Bearer Auth

#### 5. DELETE `/users/:id` - Deletar Usuário

```typescript
@Delete(':id')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Deletar um usuário' })
@ApiResponse({ status: 200, description: 'Usuário deletado com sucesso' })
@ApiResponse({ status: 404, description: 'Usuário não encontrado' })
async remove(@Param('id') id: string) {
  return await this.usersService.remove(id);
}
```

**Características:**
- 🔒 **Protegido** (requer autenticação JWT)
- ✅ Retorna status 200 (OK) ao invés de 204
- ✅ Documentação Swagger com Bearer Auth

---

## Endpoints da API

### Base URL
```
http://localhost:3000
```

### 1. Criar Usuário

**POST** `/users`

**Request Body:**
```json
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Response (201):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "email": "usuario@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Erros:**
- `409 Conflict`: Email já está em uso

---

### 2. Listar Usuários

**GET** `/users?page=1&limit=10`

**Query Parameters:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10)

**Response (200):**
```json
{
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "email": "usuario@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

---

### 3. Buscar Usuário por ID

**GET** `/users/:id`

**Response (200):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "email": "usuario@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Erros:**
- `404 Not Found`: Usuário não encontrado

---

### 4. Atualizar Usuário

**PATCH** `/users/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "email": "novoemail@example.com"
}
```

ou

```json
{
  "password": "novasenha123"
}
```

ou ambos:

```json
{
  "email": "novoemail@example.com",
  "password": "novasenha123"
}
```

**Response (200):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "email": "novoemail@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T01:00:00.000Z"
}
```

**Erros:**
- `401 Unauthorized`: Token inválido ou ausente
- `404 Not Found`: Usuário não encontrado
- `409 Conflict`: Email já está em uso

---

### 5. Deletar Usuário

**DELETE** `/users/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Usuário deletado com sucesso"
}
```

**Erros:**
- `401 Unauthorized`: Token inválido ou ausente
- `404 Not Found`: Usuário não encontrado

---

## Autenticação e Autorização

### Endpoints Públicos
- `POST /users` - Criar usuário
- `GET /users` - Listar usuários
- `GET /users/:id` - Buscar usuário por ID

### Endpoints Protegidos
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

### Como Obter um Token

Para obter um token de autenticação, você precisa fazer login:

**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Depois, use o token no header `Authorization`:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Exemplos de Uso

### Usando cURL

#### Criar Usuário
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "password": "senha123"
  }'
```

#### Listar Usuários
```bash
curl http://localhost:3000/users?page=1&limit=10
```

#### Buscar Usuário por ID
```bash
curl http://localhost:3000/users/507f1f77bcf86cd799439011
```

#### Atualizar Usuário
```bash
curl -X PATCH http://localhost:3000/users/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <seu-token>" \
  -d '{
    "email": "novoemail@example.com"
  }'
```

#### Deletar Usuário
```bash
curl -X DELETE http://localhost:3000/users/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer <seu-token>"
```

### Usando JavaScript (Fetch API)

#### Criar Usuário
```javascript
const response = await fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'usuario@example.com',
    password: 'senha123',
  }),
});

const user = await response.json();
console.log(user);
```

#### Listar Usuários
```javascript
const response = await fetch('http://localhost:3000/users?page=1&limit=10');
const data = await response.json();
console.log(data);
```

#### Atualizar Usuário
```javascript
const token = 'seu-token-aqui';

const response = await fetch('http://localhost:3000/users/507f1f77bcf86cd799439011', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify({
    email: 'novoemail@example.com',
  }),
});

const updatedUser = await response.json();
console.log(updatedUser);
```

#### Deletar Usuário
```javascript
const token = 'seu-token-aqui';

const response = await fetch('http://localhost:3000/users/507f1f77bcf86cd799439011', {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});

const result = await response.json();
console.log(result);
```

---

## Tratamento de Erros

O CRUD implementa tratamento de erros adequado usando as exceções do NestJS:

### Exceções Utilizadas

1. **ConflictException** (409)
   - Quando tenta criar um usuário com email já existente
   - Quando tenta atualizar para um email já em uso

2. **NotFoundException** (404)
   - Quando busca um usuário que não existe
   - Quando tenta atualizar/deletar um usuário inexistente

3. **UnauthorizedException** (401)
   - Quando tenta acessar endpoint protegido sem token
   - Quando o token é inválido ou expirado

### Exemplo de Resposta de Erro

```json
{
  "statusCode": 404,
  "message": "Usuário não encontrado",
  "error": "Not Found"
}
```

---

## Segurança

### Boas Práticas Implementadas

1. **Criptografia de Senhas**
   - Todas as senhas são criptografadas usando `bcryptjs` com salt rounds de 10
   - Senhas nunca são retornadas nas respostas da API

2. **Validação de Dados**
   - Uso de `class-validator` para validar DTOs
   - Validação de email e campos obrigatórios

3. **Autenticação JWT**
   - Endpoints de modificação (UPDATE/DELETE) requerem autenticação
   - Uso de `AuthGuard('jwt')` para proteger rotas

4. **Prevenção de Duplicatas**
   - Verificação de email único antes de criar/atualizar

---

## Documentação Swagger

A documentação interativa está disponível em:

```
http://localhost:3000/api
```

No Swagger, você pode:
- Ver todos os endpoints
- Testar as requisições diretamente
- Ver exemplos de request/response
- Autenticar usando o botão "Authorize"

---

## Próximos Passos (Sugestões)

1. **Filtros e Busca**
   - Adicionar busca por email
   - Adicionar filtros avançados

2. **Permissões**
   - Implementar roles (admin, user, etc.)
   - Permitir que usuários atualizem apenas seus próprios dados

3. **Validações Adicionais**
   - Validação de força de senha
   - Validação de formato de email mais rigorosa

4. **Auditoria**
   - Log de ações realizadas
   - Histórico de alterações

5. **Soft Delete**
   - Ao invés de deletar, marcar como deletado
   - Permitir recuperação de usuários deletados

---

## Conclusão

O CRUD de usuários foi implementado seguindo as melhores práticas do NestJS e mantendo consistência com o restante do projeto. Todos os endpoints estão documentados no Swagger e prontos para uso.

Para mais informações sobre o NestJS, consulte a [documentação oficial](https://docs.nestjs.com/).

