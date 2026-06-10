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
![ByteDance logo](/images/company-icons/bytedance.svg){: .company-icon } **ByteDance Data - Douyin, Application Algorithm Intern (LLM Post-training), 2026.04 - Present.**  
I work on post-training algorithms for customer service foundation models across ByteDance apps. My work combines Seed/Qwen-series LLMs with customer-service dialogue data, business knowledge bases, and multi-turn interaction logs to build reinforcement learning pipelines for improving task-oriented response quality and model behavior.

![Alibaba logo](/images/company-icons/alibaba.svg){: .company-icon } **Alibaba Qwen (C-end), Algorithm Intern (LLM Post-training), 2025.09 - 2026.02.**  
I explored a unified `SFT + GRPO` framework for reasoning-oriented post-training and proposed a PPL-based adaptive loss weighting method to balance supervision and exploration on difficult samples. The approach outperformed baselines on AIME24/25 and out-of-domain reasoning benchmarks. I also built an end-to-end verification model based on `Qwen3-235B-A22B`, using data flywheel signals, majority voting, reward design, and online curriculum learning to train from weakly labeled data; the system reached **95.7% precision / 63.2% recall** in offline evaluation and supported Qwen/Quark education scenarios.

![Huawei logo](/images/company-icons/huawei.svg){: .company-icon } **Huawei Noah's Ark Lab, Algorithm Intern (MLLM), 2025.05 - 2025.09.**  
I focused on efficient multimodal inference for high-resolution MLLM inputs, designing training-free visual token pruning methods to reduce latency and memory cost without modifying model architectures. I developed two plug-and-play pruning frameworks around separator-token anchoring and head-importance-aware scoring; on Qwen2.5-VL-style models, the methods preserved strong performance under aggressive token reduction and led to **ICME 2026** and **CVPR 2026** publications.

<span class='anchor' id='publications'></span>

# Publications 📚
<div class="pub-list">
  <div class="pub-item">
    <div class="pub-title">APEX: Adaptively Balancing Off-Policy Guidance and On-Policy Exploration for LLM Reasoning</div>
    <div class="pub-authors"><strong>Yuchen Wang</strong>, et al. <span class="pub-role">First author</span></div>
    <div class="pub-affiliation">University of Science and Technology of China.</div>
    <div class="pub-meta"><span class="pub-badge pub-badge--submitted">EMNLP 2026</span><span class="pub-dot">Submitted</span></div>
  </div>

  <div class="pub-item">
    <div class="pub-title">SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models</div>
    <div class="pub-authors"><strong>Yuchen Wang</strong>, Qihui Zhu, Yang Liu, Xiaoyan Sun, Siying Wu. <span class="pub-role">First author</span></div>
    <div class="pub-affiliation">University of Science and Technology of China; Hefei Comprehensive National Science Center; ChangXin Memory Technologies.</div>
    <div class="pub-meta"><span class="pub-badge">ICME 2026</span><span class="pub-dot">Accepted</span></div>
  </div>

  <div class="pub-item">
    <div class="pub-title">HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models</div>
    <div class="pub-authors">Qihui Zhu, Tao Zhang, <strong>Yuchen Wang</strong>, Shuangwu Chen, Xiaobin Tan, Jian Yang, Yang Liu, Yinfei Pan.</div>
    <div class="pub-affiliation">University of Science and Technology of China; ChangXin Memory Technologies, Inc.; Huawei Noah's Ark Lab.</div>
    <div class="pub-meta"><span class="pub-badge">CVPR 2026</span><span class="pub-dot">Accepted</span><a href="https://arxiv.org/abs/2604.07812">arXiv</a></div>
  </div>
</div>

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
