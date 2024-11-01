from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from kubernetes import client, config

app = FastAPI()

origins = [
    "https://netpol-viz.mous.ovh",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = FastAPI()

# Chargez la configuration du cluster (assurez-vous que votre service account a accès)
config.load_incluster_config()

# Exemple d'endpoint pour récupérer les services d'un namespace
@api_router.get("/services/")
def get_services(namespace: str):
    v1 = client.CoreV1Api()
    services = v1.list_namespaced_service(namespace)
    return {"services": [svc.metadata.name for svc in services.items]}

@api_router.get("/deployments/")
def get_deployments(namespace: str):
    apps_v1 = client.AppsV1Api()
    deployments = apps_v1.list_namespaced_deployment(namespace)
    return {"deployments": [dep.metadata.name for dep in deployments.items]}

@api_router.get("/statefulsets/")
def get_statefulsets(namespace: str):
    apps_v1 = client.AppsV1Api()
    statefulsets = apps_v1.list_namespaced_stateful_set(namespace)
    return {"statefulsets": [sts.metadata.name for sts in statefulsets.items]}

@api_router.get("/networkpolicies/")
def get_network_policies(namespace: str):
    networking_v1 = client.NetworkingV1Api()
    policies = networking_v1.list_namespaced_network_policy(namespace)
    return {"network_policies": [policy.to_dict() for policy in policies.items]}

# Montez le routeur sur /api
app.mount("/api", api_router)