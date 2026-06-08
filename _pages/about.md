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
I am an M.S. student in Computer Technology at the University of Science and Technology of China (USTC), from 2024.09 to 2027.06. My research focuses on **LLM post-training, reinforcement learning for reasoning, and efficient multimodal inference**.

I am currently an algorithm intern at **ByteDance Data - Douyin**, working on reinforcement learning and AutoResearch-style training for customer service models. I am open to academic collaborations on LLM reasoning, post-training, and efficient MLLM inference. Please feel free to contact me.

<div class="about-tags">
  <span>LLM Post-training</span>
  <span>RL for Reasoning</span>
  <span>AutoResearch Training</span>
  <span>Efficient MLLM Inference</span>
  <span>Visual Token Pruning</span>
  <span>Open to Collaboration</span>
</div>

Contact 📫: `wangyuc@mail.ustc.edu.cn`
GitHub 🐙: [https://github.com/sansanyuchen](https://github.com/sansanyuchen)

<span class='anchor' id='news'></span>

# News 📰
- *2026.05* **APEX** was submitted to **EMNLP 2026**.
- *2026.04* Joined **ByteDance Data - Douyin** as an Application Algorithm Intern.
- *2026.03* **SepPrune** was accepted by **ICME 2026** (First Author).
- *2026.03* **HAWK** was accepted by **CVPR 2026**.

<span class='anchor' id='education'></span>

# Education 🎓
- *2024.09 - 2027.06 (Now)* Master, Computer Technology, University of Science and Technology of China
- *2020.09 - 2024.06* Bachelor, New Energy Science and Engineering, North China Electric Power University

<span class='anchor' id='internships'></span>

# Internship Experience 💼
![ByteDance logo](/images/company-icons/bytedance.svg){: .company-icon } **ByteDance Data - Douyin, Application Algorithm Intern, 2026.04 - Present.**  
I work on reinforcement learning for customer service models, focusing on AutoResearch-style training pipelines for improving task-oriented response quality and model behavior.

![Alibaba logo](/images/company-icons/alibaba.svg){: .company-icon } **Alibaba Qwen (C-end), Algorithm Intern (LLM Post-training), 2025.09 - 2026.02.**  
I explored a unified `SFT + GRPO` framework and proposed a PPL-based adaptive loss weighting method. The approach outperformed baselines on AIME24/25 and out-of-domain reasoning benchmarks. I also built an end-to-end verification model based on `Qwen3-235B-A22B`, reaching **95.7% precision / 63.2% recall** in offline evaluation.

![Huawei logo](/images/company-icons/huawei.svg){: .company-icon } **Huawei Noah's Ark Lab, Algorithm Intern (MLLM), 2025.05 - 2025.09.**  
I focused on efficient multimodal inference and designed training-free visual token pruning methods for high-resolution MLLM inputs, aiming to reduce computational cost while preserving model performance.

<span class='anchor' id='publications'></span>

# Publications 📚
- **APEX: Adaptively Balancing Off-Policy Guidance and On-Policy Exploration for LLM Reasoning**  
  **Yuchen Wang**, et al. (First author).  
  University of Science and Technology of China.  
  Submitted to EMNLP 2026.
- **SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models**  
  **Yuchen Wang**, et al. (First author).  
  University of Science and Technology of China.  
  Accepted at ICME 2026.
- **HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models**  
  Qihui Zhu, Tao Zhang, **Yuchen Wang**, Shuangwu Chen, Xiaobin Tan, Jian Yang, Yang Liu, Yinfei Pan.  
  University of Science and Technology of China; ChangXin Memory Technologies, Inc.; Huawei Noah's Ark Lab.  
  Accepted at CVPR 2026. [[arXiv](https://arxiv.org/abs/2604.07812)]

<span class='anchor' id='skills'></span>

# Skills 🧠
- Core: LLM Post-training, RLHF, PPO, GRPO, DPO, CoT Reasoning, Data Synthesis
- Frameworks: PyTorch, Verl, Swift, vLLM, Transformers

<span class='anchor' id='interests'></span>

# Research Interests 🔍
- LLM Post-training
- RLHF / PPO / GRPO / DPO
- CoT Reasoning for complex tasks
- Efficient Inference for MLLMs (training-free visual token pruning)

<span class='anchor' id='honors'></span>

# Honors and Awards 🏆
- *2025* First-Class Academic Scholarship, USTC
- *2022* Second Prize, Beijing Division of China Undergraduate Mathematical Contest in Modeling (CUMCM)
