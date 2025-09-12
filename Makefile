# TechSEO Vitals Hugo Site Makefile

.PHONY: help dev build clean preview install lint test deploy

# Default target
help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@egrep '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	@echo "Installing Hugo and dependencies..."
	npm install
	@echo "Dependencies installed!"

dev: ## Start development server
	@echo "Starting Hugo development server..."
	hugo server --disableFastRender --navigateToChanged

build: clean ## Build the site for production
	@echo "Building Hugo site..."
	hugo --minify --gc
	@echo "Site built successfully!"

clean: ## Clean build artifacts
	@echo "Cleaning build artifacts..."
	rm -rf public resources/_gen .hugo_build.lock
	@echo "Clean completed!"

preview: build ## Preview production build locally
	@echo "Starting production preview..."
	hugo server --environment production --source . --destination public

lint: ## Lint CSS and check for issues
	@echo "Linting CSS..."
	npm run lint:css
	@echo "Linting completed!"

lint-fix: ## Auto-fix CSS issues
	@echo "Fixing CSS issues..."
	npm run lint:css:fix
	@echo "CSS fixes applied!"

test: lint ## Run tests and validation
	@echo "Running tests..."
	npm test
	@echo "Testing completed!"

check-hugo: ## Check Hugo version and configuration
	@echo "Hugo version:"
	@hugo version
	@echo "Site configuration check:"
	@hugo config

stats: ## Show site statistics
	@echo "Site statistics:"
	@hugo list drafts
	@echo "Build stats:"
	@hugo --printPathWarnings --printI18nWarnings

# CI/CD targets
ci-install: ## Install dependencies for CI
	npm ci

ci-build: ci-install ## Build for CI/CD
	hugo --minify --gc --printPathWarnings

ci-test: ci-build lint ## Test in CI environment
	@echo "CI tests passed!"

# Deployment helpers
deploy-netlify: build ## Deploy to Netlify (requires netlify-cli)
	@echo "Deploying to Netlify..."
	netlify deploy --prod --dir=public

deploy-vercel: build ## Deploy to Vercel (requires vercel-cli)
	@echo "Deploying to Vercel..."
	vercel --prod

# Content management
new-post: ## Create a new blog post (usage: make new-post TITLE="Post Title")
	@if [ -z "$(TITLE)" ]; then echo "Usage: make new-post TITLE=\"Your Post Title\""; exit 1; fi
	hugo new content/blog/$(shell echo "$(TITLE)" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$$//g').md

new-page: ## Create a new page (usage: make new-page PATH="path/to/page")
	@if [ -z "$(PATH)" ]; then echo "Usage: make new-page PATH=\"path/to/page\""; exit 1; fi
	hugo new content/$(PATH)/_index.md

# Development helpers
watch: ## Watch for file changes and rebuild
	@echo "Watching for changes..."
	hugo server --watch --disableFastRender

serve-all: ## Serve site with all content (including drafts)
	hugo server --buildDrafts --buildFuture --disableFastRender

# Maintenance
update: ## Update dependencies
	@echo "Updating dependencies..."
	npm update
	@echo "Dependencies updated!"

backup: ## Create a backup of the site
	@echo "Creating backup..."
	tar -czf backup-$(shell date +%Y%m%d-%H%M%S).tar.gz --exclude=node_modules --exclude=public --exclude=resources .
	@echo "Backup created!"