# The Mafia Project

An open-source reimagining of the classic Mafia game with customizable rules and interactive play.

## 🏗️ Project Structure

This is a full-stack TypeScript monorepo built with:

- **Backend**: NestJS with TypeORM, JWT authentication, and role-based access control
- **Frontend**: Next.js with TailwindCSS and state management
- **Database**: SQLite (development) / PostgreSQL (production ready)
- **DevOps**: Docker, GitHub Actions CI/CD, and comprehensive testing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker (optional, for containerized development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-mafia-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd apps/backend && npm install
   cd ../frontend && npm install --legacy-peer-deps
   ```

3. **Setup environment variables**
   ```bash
   # Backend
   cp apps/backend/.env.example apps/backend/.env
   
   # Edit the .env file with your configuration
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend (http://localhost:3000)
   cd apps/backend && npm run start:dev
   
   # Terminal 2 - Frontend (http://localhost:3001)
   cd apps/frontend && npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000
   - API Documentation: http://localhost:3000/api

### Docker Development

```bash
# Development environment
docker-compose -f docker-compose.dev.yml up

# Production environment
docker-compose up
```

## 📋 Features

### Backend (NestJS)

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Admin, Moderator, Player)
  - Password hashing with bcrypt
  - Protected routes and guards

- **Database Integration**
  - TypeORM with SQLite (development)
  - User entity with roles and validation
  - Database migrations and seeding

- **API Documentation**
  - Swagger/OpenAPI documentation
  - Auto-generated API docs at `/api`
  - Request/response validation

- **Code Quality**
  - TypeScript strict mode
  - ESLint and Prettier configuration
  - Unit and integration tests with Jest
  - Test coverage reporting

### Frontend (Next.js)

- **User Interface**
  - Responsive design with TailwindCSS
  - Authentication forms (login/register)
  - Protected dashboard routes
  - Modern React patterns

- **State Management**
  - Zustand for client state
  - Persistent authentication state
  - API integration with axios

- **Developer Experience**
  - TypeScript for type safety
  - Hot reloading and fast refresh
  - Component-based architecture
  - Custom UI component library

## 🛠️ Development

### Available Scripts

#### Root Level
```bash
npm run build        # Build all apps
npm run dev          # Start all apps in development
npm run lint         # Lint all apps
npm run test         # Test all apps
npm run format       # Format code with Prettier
```

#### Backend
```bash
npm run start:dev    # Start with hot reload
npm run build        # Build for production
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run lint         # ESLint
```

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # ESLint
npm run test         # Run tests (when configured)
```

### Testing

The project includes comprehensive testing:

- **Backend**: Unit tests with Jest, integration tests
- **Frontend**: Component testing ready (setup included)
- **E2E**: End-to-end testing setup

Run tests:
```bash
# Backend tests
cd apps/backend && npm test

# All tests
npm test
```

### Code Quality

- **ESLint**: Configured for TypeScript and React
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit linting
- **Lint-staged**: Only lint staged files

## 🚢 Deployment

### Docker

```bash
# Build and run production containers
docker-compose up --build

# Development with hot reload
docker-compose -f docker-compose.dev.yml up
```

### CI/CD

GitHub Actions pipeline includes:
- Code linting and formatting checks
- Unit and integration testing
- Docker image building
- Automated deployment (configurable)

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```bash
# Database
DATABASE_URL="file:./database.sqlite"

# JWT
JWT_SECRET="your-super-secret-jwt-key"

# Server
PORT=3000
NODE_ENV=development
```

#### Frontend
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Database

The application uses TypeORM with:
- SQLite for development (easy setup)
- PostgreSQL ready for production
- Automatic migrations
- User entity with role-based permissions

### API Documentation

Interactive API documentation is available at `http://localhost:3000/api` when running the backend.

## 🏗️ Architecture

### Backend Architecture

```
src/
├── auth/              # Authentication module
│   ├── dto/           # Data transfer objects
│   ├── guards/        # Route guards
│   ├── strategies/    # Passport strategies
│   └── decorators/    # Custom decorators
├── users/             # User management module
│   ├── entities/      # Database entities
│   └── dto/           # Data transfer objects
└── main.ts            # Application bootstrap
```

### Frontend Architecture

```
src/
├── app/               # Next.js app router
│   ├── auth/          # Authentication pages
│   └── dashboard/     # Protected dashboard
├── components/        # Reusable components
│   └── ui/            # Base UI components
├── lib/               # Utilities and API
└── types/             # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Write tests for new features
- Follow the existing code style
- Update documentation for significant changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Next.js](https://nextjs.org/) - React framework for production
- [TypeORM](https://typeorm.io/) - Database ORM
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

**Happy coding! 🎮**
