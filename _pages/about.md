---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me 🚀
I am an M.S. student in Computer Technology at the University of Science and Technology of China (USTC), from 2024.09 to 2027.06. I received my B.E. degree from North China Electric Power University (2020.09 - 2024.06). My research focuses on LLM post-training and efficient inference.

Contact 📫: `wangyuc@mail.ustc.edu.cn`
GitHub 🐙: [https://github.com/sansanyuchen](https://github.com/sansanyuchen)

<span class='anchor' id='news'></span>

# News 📰
- *2026.03* **SepPrune** was accepted by **ICME 2026** (First Author).
- *2026.03* **HAWK** was accepted by **CVPR 2026**.
- *2026* **APEX** was submitted to **EMNLP 2026**.

<span class='anchor' id='interests'></span>

# Research Interests 🔍
- LLM Post-training
- RLHF / PPO / GRPO / DPO
- CoT Reasoning for complex tasks
- Efficient Inference for MLLMs (training-free visual token pruning)

<span class='anchor' id='internships'></span>

# Internship Experience 💼
![ByteDance logo](/images/company-icons/bytedance.svg){: .company-icon } **ByteDance Data - Douyin, Application Algorithm Intern, 2026.04 - Present.**  
I work on reinforcement learning for customer service models, focusing on AutoResearch-style training pipelines for improving task-oriented response quality and model behavior.

![Alibaba Cloud logo](/images/company-icons/alibaba-cloud.svg){: .company-icon } **Alibaba Qwen (C-end), Algorithm Intern (LLM Post-training), 2025.09 - 2026.02.**  
I explored a unified `SFT + GRPO` framework and proposed a PPL-based adaptive loss weighting method. The approach outperformed baselines on AIME24/25 and out-of-domain reasoning benchmarks. I also built an end-to-end verification model based on `Qwen3-235B-A22B`, reaching **95.7% precision / 63.2% recall** in offline evaluation.

![Huawei logo](/images/company-icons/huawei.svg){: .company-icon } **Huawei Noah's Ark Lab, Algorithm Intern (MLLM), 2025.05 - 2025.09.**  
I focused on efficient multimodal inference and designed training-free visual token pruning methods for high-resolution MLLM inputs, aiming to reduce computational cost while preserving model performance.

<span class='anchor' id='publications'></span>

# Publications 📚
- **SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models**  
  First Author, Accepted at ICME 2026.
- **HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models**  
  Accepted at CVPR 2026.

<span class='anchor' id='skills'></span>

# Skills 🧠
- Core: LLM Post-training, RLHF, PPO, GRPO, DPO, CoT Reasoning, Data Synthesis
- Frameworks: PyTorch, Verl, Swift, vLLM, Transformers

<span class='anchor' id='honors'></span>

# Honors and Awards 🏆
- *2025* First-Class Academic Scholarship, USTC
- *2022* Second Prize, Beijing Division of CUMCM

<span class='anchor' id='education'></span>

# Education 🎓
- *2024.09 - 2027.06 (Now)* Master, Computer Technology, University of Science and Technology of China
- *2020.09 - 2024.06* Bachelor, New Energy Science and Engineering, North China Electric Power University
