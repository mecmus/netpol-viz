# Netpol Viz - Backend

Ce backend est développé avec FastAPI pour interagir avec l'API Kubernetes et fournir les données nécessaires au frontend pour visualiser les flux réseau.

## Configuration

### Prérequis

- Accès à GitHub Container Registry

### Utilisation de l'Image Docker

L'image Docker est automatiquement créée et hébergée dans le GitHub Container Registry.

1. **Pull de l'image Docker :**

   ```bash
   docker pull ghcr.io/mecmus/netpol-viz/netpol-viz-back:latest
   ```

2. **Exécuter le conteneur :**

   ```bash
   docker run -p 8000:8000 ghcr.io/mecmus/netpol-viz/netpol-viz-back:latest
   ```

## API Endpoints

- `GET /services/`: Liste des services dans un namespace.
- `GET /deployments/`: Liste des déploiements dans un namespace.
- `GET /statefulsets/`: Liste des StatefulSets dans un namespace.
- `GET /networkpolicies/`: Liste des NetworkPolicies dans un namespace.

## Contribution

Les contributions sont appréciées ! N'hésitez pas à ouvrir une pull request ou une issue.


