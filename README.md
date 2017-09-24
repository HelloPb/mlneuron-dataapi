# mlneuron-dataapi


export DOCKER_ID_USER="prasannabhat"

sudo docker login

sudo docker push $DOCKER_ID_USER/mlneuron-dataapi:0.0

sudo docker build -t prasannabhat/mlneuron-dataapi:latest -t prasannabhat/mlneuron-dataapi:0.0 .

