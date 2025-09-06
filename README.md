# Ayurvedicure – AI-Powered Personalized Ayurvedic Skincare System

## Project Overview
Precision Ayurvedic Skincare AI is designed to bring ancient Ayurvedic wisdom into the modern skincare space through artificial intelligence. While Ayurveda provides detailed principles on prakriti (constitution), vikruti (imbalances), and seasonal care, these insights often remain inaccessible or overly generalized for today’s users.

The system integrates a RAG-based chatbot (FAISS + Gemini embeddings) trained on 21 classical Ayurvedic texts and 2000+ curated articles, along with a ResNet50 skin-condition recognition model. Together, they deliver personalized prescriptions for issues like acne, dark spots, and wrinkles while adapting to user lifestyle, environmental conditions, and seasonal cycles—true to Ayurveda’s holistic approach.

![Landing Page](/content/Landing_Page.png)
![Questionnaire](/content/Questionnaire_Page.png)
![Project Flow](/content/Project_Flow.png)


## Model and Dataset

At the core of the system is a hybrid AI pipeline combining retrieval-based knowledge with machine learning diagnostics.

- RAG Chatbot: Built on FAISS + Gemini embeddings, fine-tuned using 21 Ayurvedic books and 2000+ articles. It interprets user queries and generates prescriptions rooted in Ayurvedic formulations and principles.

- ResNet50 Skin-Type Model: Achieves 90% accuracy in classifying visible skin conditions such as acne, dark spots, and wrinkles.

- User Profiling Dataset: Incorporates questionnaire-based inputs (prakriti/vikruti), lifestyle patterns, and environmental factors for holistic diagnosis.

The dataset blends textual Ayurvedic knowledge, skin imaging data, and user feedback loops to refine recommendations over time.

## Results and Evaluation

In benchmarking the system against existing skincare apps, the AI-driven Ayurvedic approach consistently showed higher personalization and interpretability:

- Outperforms generic recommendation engines by combining dosha analysis, lifestyle data, and imaging.

- Provides Ayurveda-grounded prescriptions—a feature absent in mainstream skincare apps.

- Enables multilingual support and contextual reasoning through the RAG chatbot.

- Feedback integration allows prescriptions to evolve, improving long-term skin outcomes.

The ResNet50 diagnostic model achieved 90% accuracy on test datasets, while chatbot evaluation confirmed high relevance in Ayurvedic prescriptions compared to domain expert baseline

![Chatbot 1](/content/Chatbot.png)
![Chatbot 2](/content/Chatbot2.png)

## Future Outlook

Looking ahead, the system aims to evolve into a full-fledged precision wellness ecosystem by integrating biomarker-based diagnostics, fine-grained skin imaging, and wearable health data for deeper personalization. A mobile-first deployment will make the platform widely accessible, while partnerships with Ayurvedic practitioners and product companies will help validate and scale its recommendations. These advancements will ensure the system continues to bridge ancient Ayurvedic principles with modern AI for truly individualized skincare.