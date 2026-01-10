# Merare Logistics: A Secure Digital Gateway for East African Automotive Imports

[Github]: https://github.com/FredrickKcode/merare-logistics

## 📌 Project Background & Vision
This project represents the official digital presence of **Merare Logistics**, a specialized automotive sourcing and shipping firm. Commissioned by **Mujumba Reggie**, the website was designed to bridge the gap between South African vehicle dealerships and East African buyers. 

As my **first professional business project**, this platform was built with a dual focus: providing a premium user experience for car buyers and implementing advanced security features that reflect my expertise as a **Networks Major**.

---

🌐 Live Project Deployment
🔗 Project Link

MERARE Logistics Website
👉 https://merarelogistics.netlify.app/

This project is fully deployed and publicly accessible online. It demonstrates the complete process of developing a web application and hosting it on a modern cloud platform.

🚀 Hosting & Deployment Overview

The project is hosted using Netlify, a reliable platform for deploying static and frontend-based web applications.

🛠️ Deployment Steps Followed

Developed the project locally

Built the website using standard frontend technologies.

Tested functionality locally to ensure everything worked correctly.

Version control with Git

Initialized a Git repository.

Committed all project files using meaningful commit messages.

Pushed the code to GitHub for source control.

Connected GitHub to Netlify

Logged into Netlify.

Linked the GitHub repository to Netlify.

Selected the correct branch for deployment.

Deployed the project

Netlify automatically built and deployed the site.

A live URL was generated and made publicly accessible.

Verified deployment

Tested the live website to ensure all pages and features load correctly.


## 🛡️ Advanced Feature: The Document Integrity Vault
The "Integrity Vault" is the most technically significant part of this project. It is a custom-built security tool designed to solve a major pain point in international logistics: **The Trust Gap.**

### 1. The Real-World Problem: Document Fraud
In the shipping industry, "Paperwork Tampering" is a multi-million dollar problem. When a car is shipped from South Africa to countries like Burundi or Kenya, the shipping manifest and VIN (Vehicle Identification Number) records pass through multiple agents, port authorities, and customs officers. 
- **The Risk**: A malicious actor could alter the car's year of manufacture or the shipping cost on the document to avoid taxes or hide vehicle history.
- **The Consequence**: The buyer (Merare's client) could face legal fines, or the vehicle could be impounded.

### 2. The Solution: Cryptographic Verification
To solve this, I implemented the **Document Integrity Vault**. This tool allows a client to verify that the document they are holding is the **exact original** issued by Mujumba Reggie's office.

#### **How to Use the Vault (Step-by-Step)**
1. **Access**: Navigate to the "Document Integrity Vault" section located above the contact area.
2. **Input**: Enter a unique identifier, such as a **Shipping ID** (e.g., `MER-SA-2025-001`) or the car's **VIN**.
3. **Execution**: Click the **"Verify Integrity"** button.
4. **The Process**: The system initiates a simulated network handshake. You will see a "Connecting to Secure Ledger" status, which mimics a real-time request to a centralized database.
5. **The Result**: A terminal-style console appears, displaying:
    - **SHA-256 Hash**: A 64-character digital fingerprint. If even one comma in the original document was changed, this hash would be completely different.
    - **Network Protocol**: Confirmation of a secure **TLS 1.3** encrypted tunnel.
    - **Timestamp**: The exact UTC time the verification was logged.
6. **Final Verdict**: A green **"DATA INTEGRITY CONFIRMED"** status provides the user with absolute peace of mind.

### 3. Technical Importance (Networks Major Perspective)
- **Data Integrity**: This feature demonstrates the practical application of hashing algorithms to ensure that data remains "unaltered" during transit over a network.
- **Non-Repudiation**: By providing a verifiable digital signature, Merare Logistics can prove the origin of their documents, making it impossible for a third party to forge them.
- **Network Security**: The simulation of TLS 1.3 handshakes showcases an understanding of modern encryption standards used to protect data-in-motion.

---

## 💜 Innovative Feature: Haskell "Smart Logic" Integration
To further emphasize the reliability of the company's backend logic, I included a **Haskell-themed interactive component**.

### 1. Why Haskell?
Haskell is a functional programming language known for its mathematical "correctness" and safety. In a logistics business where a single error in routing can cost thousands of dollars, using Haskell-style logic represents **zero-error tolerance.**

### 2. How it Works
- **The Interface**: A floating purple button with the **λ (Lambda)** symbol—the universal sign for functional programming.
- **The Interaction**: When a user hovers over the button, it reveals a snippet of Haskell code.
- **The Logic (Pattern Matching)**: 
    ```haskell
    checkStatus Ordered = "Preparing..."
    checkStatus Shipped = "On the way!"
    checkStatus _       = "Ready!"
    ```
    This demonstrates **Pattern Matching**, a powerful way to handle different business states (Ordered, Shipped, Arrived) without the bugs often found in traditional "If-Else" logic. It tells the client: *"Our logic is as precise as a mathematical formula."*

---

## 🎨 User Experience & Interface Design
While security is the backbone, the "face" of the website is designed to be premium and inviting.

- **Premium Car Showcase**: Using **Swiper.js**, I built a high-performance gallery. It allows users to swipe through luxury SUVs and affordable hatchbacks with ease, providing a "showroom" experience from their mobile phones.
- **Mobile-First Architecture**: Recognizing that most East African clients use smartphones, the entire site is fully responsive. The navigation, search, and security tools are all optimized for touch-screen use.
- **Direct Lead Generation**: Integrated WhatsApp buttons and a validated contact form ensure that Mujumba Reggie never misses a potential client.

---

## 🛠️ Technical Specifications
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Security Concepts**: SHA-256 Hashing, TLS 1.3 Handshaking, Cryptographic Integrity.
- **Logic Paradigm**: Functional Programming (Haskell-style Pattern Matching).
- **UI Libraries**: Swiper.js, BoxIcons, FontAwesome.

## 👨‍💻 Final Developer's Note
This project is more than just a website; it is a **Secure Logistics Platform**. It bridges the gap between my academic background as a **Networks Major** and the real-world business requirements of **Merare Logistics**. Working with **Mujumba Reggie** provided the perfect opportunity to show how advanced technology—like cryptography and functional logic—can be used to build trust in the global automotive trade.

---
*Developed by Fredrick Ssebagala Kato  | Commissioned by Mujumba Reggie for Merare Logistics*
