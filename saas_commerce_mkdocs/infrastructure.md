# 🏗️ Terraform & AWS Infrastructuur

Deze documentatie beschrijft hoe de infrastructuur is opgezet met **Terraform, Kubernetes en AWS**.

## 🌍 **Cloud infrastructuur (AWS)**
- **AWS S3** → Opslag voor media & assets
- **AWS RDS (PostgreSQL)** → Database voor backend
- **AWS EC2** → Virtual Machine voor backend API
- **AWS CloudFront CDN** → Snellere frontend distributie

## 🚀 Terraform Deployment
1. **Initialiseer Terraform**  
   ```bash
   terraform init
   ```
2. **Maak de infrastructuur aan**  
   ```bash
   terraform apply -auto-approve
   ```

📌 **Meer details? Bekijk de Terraform configuratie in `terraform_aws_extended_setup/main.tf`.**

