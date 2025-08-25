import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_7: LessonContent = {
  title: 'Cloud Deployment (AWS, Azure, GCP)',
  type: 'lesson',
  duration: '100 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn cloud deployment strategies for microservices on major cloud platforms including AWS, Azure, and Google Cloud Platform. Understand container orchestration with Kubernetes, infrastructure as code, CI/CD pipelines, and cloud-native patterns.',
    objectives: [
      'Deploy containerized microservices to cloud platforms',
      'Implement Kubernetes for container orchestration',
      'Use infrastructure as code tools (Terraform, CloudFormation)',
      'Set up CI/CD pipelines for cloud deployments',
      'Configure cloud monitoring and logging',
      'Implement auto-scaling and load balancing',
      'Apply cloud security best practices'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Cloud Deployment (AWS, Azure, GCP)
        </h1>
        <p class="mt-3 text-green-100 text-lg">Deploying microservices to major cloud platforms</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Cloud Deployment Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Cloud deployment involves running applications on remote servers managed by cloud providers. 
            This enables scalability, reliability, and cost-effectiveness compared to traditional 
            on-premises deployments.
          </p>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 Cloud Deployment Models</h4>
            <ul class="text-green-700 space-y-1">
              <li>• <strong>Infrastructure as a Service (IaaS):</strong> Virtual machines and infrastructure</li>
              <li>• <strong>Platform as a Service (PaaS):</strong> Managed application platforms</li>
              <li>• <strong>Container as a Service (CaaS):</strong> Container orchestration platforms</li>
              <li>• <strong>Function as a Service (FaaS):</strong> Serverless computing platforms</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">✅ Cloud Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Elastic scalability on demand</li>
                <li>• Reduced infrastructure costs</li>
                <li>• Global availability and performance</li>
                <li>• Built-in security and compliance</li>
                <li>• Automated backup and disaster recovery</li>
                <li>• Managed services and updates</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Cloud Challenges</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Vendor lock-in concerns</li>
                <li>• Security and compliance requirements</li>
                <li>• Network latency and connectivity</li>
                <li>• Cost management and optimization</li>
                <li>• Multi-cloud complexity</li>
                <li>• Data sovereignty issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Major Cloud Platforms
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">AWS Services for Microservices</h4>
              <p class="text-teal-700 mb-3">Amazon Web Services provides comprehensive services for microservices deployment:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">Key Services</h5>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>ECS/EKS</strong>
                    <p class="text-gray-600">Container orchestration</p>
                  </div>
                  <div>
                    <strong>EC2</strong>
                    <p class="text-gray-600">Virtual machines</p>
                  </div>
                  <div>
                    <strong>S3</strong>
                    <p class="text-gray-600">Object storage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Azure Cloud Services</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Service</th>
                      <th class="py-2 px-4 text-left">Description</th>
                      <th class="py-2 px-4 text-left">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">AKS</td>
                      <td class="py-2 px-4">Azure Kubernetes Service</td>
                      <td class="py-2 px-4">Container orchestration</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">App Service</td>
                      <td class="py-2 px-4">Managed application platform</td>
                      <td class="py-2 px-4">Web application hosting</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Functions</td>
                      <td class="py-2 px-4">Serverless computing</td>
                      <td class="py-2 px-4">Event-driven processing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Kubernetes Orchestration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Kubernetes Architecture</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Control Plane</h5>
                  <p class="text-sm text-gray-700 mb-2">Manages cluster state and scheduling</p>
                  <ul class="text-xs space-y-1">
                    <li>• API Server</li>
                    <li>• etcd</li>
                    <li>• Scheduler</li>
                    <li>• Controller Manager</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Worker Nodes</h5>
                  <p class="text-sm text-gray-700 mb-2">Run application workloads</p>
                  <ul class="text-xs space-y-1">
                    <li>• Kubelet</li>
                    <li>• Container Runtime</li>
                    <li>• Kube Proxy</li>
                    <li>• Pods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Infrastructure as Code
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">IaC Tools and Patterns</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Terraform</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Multi-cloud provisioning</li>
                    <li>• Declarative configuration</li>
                    <li>• State management</li>
                    <li>• Module composition</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">CloudFormation</h5>
                  <ul class="text-sm space-y-1">
                    <li>• AWS-native provisioning</li>
                    <li>• Template-based deployment</li>
                    <li>• Stack management</li>
                    <li>• Change sets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Cloud Deployment Implementation

// 1. Kubernetes Deployment for Microservice
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
  labels:
    app: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: myregistry/user-service:latest
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "kubernetes"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: user-db-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10

---

apiVersion: v1
kind: Service
metadata:
  name: user-service
  labels:
    app: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 8080
    targetPort: 8080
  type: ClusterIP

// 2. AWS CloudFormation Template
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Microservices infrastructure on AWS'

Parameters:
  EnvironmentName:
    Type: String
    Default: production
    AllowedValues:
      - production
      - staging
      - development

Resources:
  # VPC
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      EnableDnsSupport: true
      Tags:
        - Key: Name
          Value: !Sub "\${EnvironmentName}-vpc"

  # Public Subnets
  PublicSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']
      MapPublicIpOnLaunch: true
      Tags:
        - Key: Name
          Value: !Sub "\${EnvironmentName}-public-subnet-1"

  PublicSubnet2:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.2.0/24
      AvailabilityZone: !Select [1, !GetAZs '']
      MapPublicIpOnLaunch: true
      Tags:
        - Key: Name
          Value: !Sub "\${EnvironmentName}-public-subnet-2"

  # Internet Gateway
  InternetGateway:
    Type: AWS::EC2::InternetGateway
    Properties:
      Tags:
        - Key: Name
          Value: !Sub "\${EnvironmentName}-igw"

  AttachGateway:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  # ECS Cluster
  ECSCluster:
    Type: AWS::ECS::Cluster
    Properties:
      ClusterName: !Sub "\${EnvironmentName}-cluster"

  # Application Load Balancer
  ApplicationLoadBalancer:
    Type: AWS::ElasticLoadBalancingV2::LoadBalancer
    Properties:
      Scheme: internet-facing
      Subnets:
        - !Ref PublicSubnet1
        - !Ref PublicSubnet2
      SecurityGroups:
        - !Ref LoadBalancerSecurityGroup

  # Load Balancer Target Group
  TargetGroup:
    Type: AWS::ElasticLoadBalancingV2::TargetGroup
    Properties:
      HealthCheckPath: /health
      Port: 8080
      Protocol: HTTP
      VpcId: !Ref VPC
      TargetType: ip

  # Load Balancer Listener
  ALBListener:
    Type: AWS::ElasticLoadBalancingV2::Listener
    Properties:
      DefaultActions:
        - Type: forward
          TargetGroupArn: !Ref TargetGroup
      LoadBalancerArn: !Ref ApplicationLoadBalancer
      Port: 80
      Protocol: HTTP

  # Security Groups
  LoadBalancerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Security group for ALB
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - CidrIp: 0.0.0.0/0
          IpProtocol: tcp
          FromPort: 80
          ToPort: 80

  ECSServiceSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Security group for ECS services
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - SourceSecurityGroupId: !Ref LoadBalancerSecurityGroup
          IpProtocol: tcp
          FromPort: 8080
          ToPort: 8080

Outputs:
  ClusterName:
    Description: ECS Cluster Name
    Value: !Ref ECSCluster
    Export:
      Name: !Sub "\${EnvironmentName}:ClusterName"

  TargetGroupArn:
    Description: ALB Target Group ARN
    Value: !Ref TargetGroup
    Export:
      Name: !Sub "\${EnvironmentName}:TargetGroupArn"

// 3. Terraform Configuration for GCP
# main.tf
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# VPC Network
resource "google_compute_network" "microservices_network" {
  name                    = "\${var.environment}-network"
  auto_create_subnetworks = false
}

# Subnetwork
resource "google_compute_subnetwork" "microservices_subnet" {
  name          = "\${var.environment}-subnet"
  ip_cidr_range = "10.0.0.0/24"
  region        = var.region
  network       = google_compute_network.microservices_network.id
}

# Kubernetes Cluster
resource "google_container_cluster" "microservices_cluster" {
  name     = "\${var.environment}-cluster"
  location = var.region

  # We can't create a cluster with no node pool
  remove_default_node_pool = true
  initial_node_count       = 1

  network    = google_compute_network.microservices_network.id
  subnetwork = google_compute_subnetwork.microservices_subnet.id

  master_auth {
    client_certificate_config {
      issue_client_certificate = false
    }
  }
}

# Node Pool
resource "google_container_node_pool" "microservices_nodes" {
  name       = "\${var.environment}-node-pool"
  location   = var.region
  cluster    = google_container_cluster.microservices_cluster.name
  node_count = var.node_count

  node_config {
    preemptible  = false
    machine_type = var.machine_type

    metadata = {
      disable-legacy-endpoints = "true"
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}

# Variables
variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "node_count" {
  description = "Number of nodes in the cluster"
  type        = number
  default     = 3
}

variable "machine_type" {
  description = "Machine type for nodes"
  type        = string
  default     = "e2-medium"
}

// 4. Azure Resource Manager Template
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "environmentName": {
      "type": "string",
      "defaultValue": "production",
      "allowedValues": [
        "production",
        "staging",
        "development"
      ]
    },
    "location": {
      "type": "string",
      "defaultValue": "[resourceGroup().location]"
    }
  },
  "variables": {
    "vnetName": "[concat(parameters('environmentName'), '-vnet')]",
    "aksName": "[concat(parameters('environmentName'), '-aks')]"
  },
  "resources": [
    {
      "type": "Microsoft.Network/virtualNetworks",
      "apiVersion": "2021-02-01",
      "name": "[variables('vnetName')]",
      "location": "[parameters('location')]",
      "properties": {
        "addressSpace": {
          "addressPrefixes": [
            "10.0.0.0/16"
          ]
        },
        "subnets": [
          {
            "name": "aks-subnet",
            "properties": {
              "addressPrefix": "10.0.0.0/24"
            }
          }
        ]
      }
    },
    {
      "type": "Microsoft.ContainerService/managedClusters",
      "apiVersion": "2021-07-01",
      "name": "[variables('aksName')]",
      "location": "[parameters('location')]",
      "dependsOn": [
        "[resourceId('Microsoft.Network/virtualNetworks', variables('vnetName'))]"
      ],
      "properties": {
        "kubernetesVersion": "1.22.6",
        "dnsPrefix": "[concat(parameters('environmentName'), '-aks')]",
        "agentPoolProfiles": [
          {
            "name": "agentpool",
            "count": 3,
            "vmSize": "Standard_B2s",
            "osType": "Linux",
            "vnetSubnetID": "[resourceId('Microsoft.Network/virtualNetworks/subnets', variables('vnetName'), 'aks-subnet')]"
          }
        ],
        "servicePrincipalProfile": {
          "clientId": "[parameters('servicePrincipalClientId')]",
          "secret": "[parameters('servicePrincipalClientSecret')]"
        }
      }
    }
  ],
  "outputs": {
    "aksClusterName": {
      "type": "string",
      "value": "[variables('aksName')]"
    }
  }
}

// 5. CI/CD Pipeline Configuration (GitHub Actions)
name: Deploy to Cloud

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    - name: Build with Maven
      run: mvn clean package -DskipTests

    - name: Build Docker image
      run: |
        docker build -t myregistry/user-service:latest .
        docker tag myregistry/user-service:latest myregistry/user-service:\${{ github.sha }}

    - name: Login to container registry
      run: |
        echo \${{ secrets.REGISTRY_PASSWORD }} | docker login myregistry -u \${{ secrets.REGISTRY_USERNAME }} --password-stdin

    - name: Push Docker image
      run: |
        docker push myregistry/user-service:latest
        docker push myregistry/user-service:\${{ github.sha }}

    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/user-service user-service=myregistry/user-service:\${{ github.sha }}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Deploy Microservices to Multiple Cloud Platforms
        </h1>
        <p class="mt-3 text-green-100 text-lg">Create deployment configurations for AWS, Azure, and GCP with Kubernetes orchestration</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Multi-Cloud Deployment Strategy
          </h2>
          
          <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-green-800 mb-2">📋 Deployment Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Infrastructure</h5>
                <ul class="text-sm space-y-1">
                  <li>• VPC/VNet creation</li>
                  <li>• Kubernetes cluster setup</li>
                  <li>• Load balancer configuration</li>
                  <li>• Security group/firewall rules</li>
                  <li>• Database service provisioning</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Application</h5>
                <ul class="text-sm space-y-1">
                  <li>• Container deployment</li>
                  <li>• Service discovery setup</li>
                  <li>• Auto-scaling policies</li>
                  <li>• Health monitoring</li>
                  <li>• Logging and metrics</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Implementation Tasks</h4>
            <pre class="text-sm">
1. Create Kubernetes manifests for all microservices
2. Implement IaC for AWS using CloudFormation
3. Implement IaC for GCP using Terraform
4. Implement ARM templates for Azure deployment
5. Configure CI/CD pipeline for multi-cloud deployment
6. Set up monitoring and alerting
7. Implement security best practices
8. Test failover and disaster recovery</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Cloud-Specific Configurations
          </h2>
          
          <div class="bg-teal-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-teal-800 mb-2">🔧 Platform Configurations</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">AWS</h5>
                <ul class="text-sm space-y-1">
                  <li>• ECS/EKS cluster</li>
                  <li>• ALB configuration</li>
                  <li>• RDS database</li>
                  <li>• IAM roles/policies</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">Azure</h5>
                <ul class="text-sm space-y-1">
                  <li>• AKS cluster</li>
                  <li>• Application Gateway</li>
                  <li>• Azure SQL Database</li>
                  <li>• Azure AD integration</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">GCP</h5>
                <ul class="text-sm space-y-1">
                  <li>• GKE cluster</li>
                  <li>• Cloud Load Balancer</li>
                  <li>• Cloud SQL database</li>
                  <li>• IAM permissions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-green-100">
            After completing this exercise, you'll have deployed a complete microservices architecture 
            to multiple cloud platforms with proper infrastructure, security, and monitoring configurations.
          </p>
        </div>
      </div>
    `
  }
};