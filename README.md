Pre-installs:
    - minikube
    
    
Nginx ingress addon
'''
minikube addons enable ingress
'''

Creating a JWT secret
'''
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
'''

Create CA key-value secret
https://medium.com/nerd-for-tech/adventures-in-encryption-securing-your-laptop-kubernetes-cluster-9e032bf77f3e
'''
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.1.1/cert-manager.crds.yaml

kubectl create secret tls loaded-ca-key-pair --cert=./server.crt --key=./temp-decrypted.key --namespace=default
'''