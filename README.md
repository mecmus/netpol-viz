# Netpol Viz

Netpol Viz est une application web utilisée pour visualiser les flux réseau permis et refusés dans un namespace Kubernetes. Cette application représente les workloads, les flux entrants et les flux sortants sous forme de graphiques.

## Structure du Projet

- **[backend/](backend/README.md)**: Contient le code du backend développé avec FastAPI.
- **frontend/**: [À compléter] Contient le code du frontend pour l'application.

## Prérequis

- Kubernetes Cluster
- Docker

## Déploiement

Pour déployer l'application, suivez les étapes :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/mecmus/netpol-viz.git
   ```

2. Naviguez dans le répertoire et suivez les instructions dans le dossier [`backend/`](backend/README.md).

3. Configurez et déployez sur votre cluster Kubernetes en utilisant les fichiers YAML fournis.

## Contribution

Les contributions sont les bienvenues ! Veuillez créer une issue pour discuter des modifications que vous souhaitez apporter.

## License

Ce projet est sous licence [MIT](LICENSE).
