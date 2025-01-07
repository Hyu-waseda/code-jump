# Variables
PROJECT_NAME = project-name

# Targets
all: create-project setup-biome setup-sass setup-react-router

create-project:
	@echo "Creating Vite project..."
	npm create vite@latest $(PROJECT_NAME)
	cd $(PROJECT_NAME) && npm install
	@echo "Project $(PROJECT_NAME) created successfully!"

setup-biome:
	@echo "Setting up Biome..."
	cd $(PROJECT_NAME) && npm install --save-dev --save-exact @biomejs/biome
	cd $(PROJECT_NAME) && npx @biomejs/biome init
	@echo "Biome setup completed!"

setup-sass:
	@echo "Setting up Sass..."
	cd $(PROJECT_NAME) && npm install sass --save-dev
	@echo "Sass setup completed!"

setup-react-router:
	@echo "Setting up React Router..."
	cd $(PROJECT_NAME) && npm install react-router-dom
	@echo "React Router setup completed!"

# Phony targets
.PHONY: all create-project setup-biome setup-sass setup-react-router clean git-commit
