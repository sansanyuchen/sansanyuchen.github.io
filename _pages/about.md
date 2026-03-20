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

# 关于我 | About Me
我是中国科学技术大学（USTC）计算机技术硕士研究生（2024.09 - 2027.06），本科毕业于华北电力大学（2020.09 - 2024.06）。研究方向聚焦于大模型后训练与高效推理。

I am an M.S. student in Computer Technology at USTC (2024.09 - 2027.06), with a B.E. degree from North China Electric Power University (2020.09 - 2024.06). My research focuses on LLM post-training and efficient inference.

联系方式 | Contact: `wangyuc@mail.ustc.edu.cn`

<span class='anchor' id='news'></span>

# 动态 | News
- *2026.03* 一作论文 **SepPrune** 被 **ICME 2026** 接收。 / **SepPrune** accepted by **ICME 2026** (First Author).
- *2026.03* 共同一作论文 **HAWK** 被 **CVPR 2026** 接收。 / **HAWK** accepted by **CVPR 2026** (Co-first Author).
- *2026* 统一后训练推理增强框架相关工作投稿 **KDD 2026（在审）**。 / Unified post-training reasoning framework submitted to **KDD 2026**.

<span class='anchor' id='interests'></span>

# 研究方向 | Research Interests
- LLM Post-training
- RLHF / PPO / GRPO / DPO
- CoT Reasoning for complex tasks
- Efficient Inference for MLLMs (training-free visual token pruning)

<span class='anchor' id='internships'></span>

# 实习经历 | Internship Experience
- *2025.09 - 2026.02* 阿里巴巴 Qwen（C 端）算法实习生（LLM Post-training）/ Algorithm Intern at Alibaba Qwen.
- 统一 `SFT + GRPO` 后训练框架，提出基于 PPL 的自适应损失加权机制。 / Proposed a unified `SFT + GRPO` framework with PPL-based adaptive loss weighting.
- 在 AIME24/25 等推理基准与域外数据上优于 baseline。 / Outperformed baselines on AIME24/25 and out-of-domain benchmarks.
- 构建 `Qwen3-235B-A22B` 教育检错模型，离线评估达到 **95.7% precision / 63.2% recall**。 / Built an end-to-end verification model with **95.7% precision / 63.2% recall**.
- *2025.05 - 2025.09* 华为诺亚方舟实验室算法实习生（MLLM）/ Algorithm Intern at Huawei Noah's Ark Lab.
- 面向高分辨率输入设计训练无关视觉 Token 剪枝方法。 / Designed training-free visual token pruning for high-resolution MLLM inference.

<span class='anchor' id='publications'></span>

# 论文成果 | Publications
- **SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models**  
  First Author, Accepted at ICME 2026.
- **HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models**  
  Co-first Author, Accepted at CVPR 2026.

<span class='anchor' id='skills'></span>

# 技能 | Skills
- Core: LLM Post-training, RLHF, PPO, GRPO, DPO, CoT Reasoning, Data Synthesis
- Frameworks: PyTorch, Verl, Swift, vLLM, Transformers

<span class='anchor' id='honors'></span>

# 荣誉奖励 | Honors and Awards
- *2025* 中国科学技术大学硕士一等学业奖学金 / First-Class Academic Scholarship, USTC
- *2022* 中国大学生数学建模竞赛北京赛区二等奖 / Second Prize, Beijing Division of CUMCM

<span class='anchor' id='education'></span>

# 教育背景 | Education
- *2024.09 - 2027.06 (Now)* Master, Computer Technology, University of Science and Technology of China
- *2020.09 - 2024.06* Bachelor, New Energy Science and Engineering, North China Electric Power University
