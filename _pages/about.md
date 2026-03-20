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

我是中国科学技术大学（USTC）计算机技术硕士研究生（2024.09 - 2027.06），本科毕业于华北电力大学（2020.09 - 2024.06）。

当前研究兴趣聚焦于大模型后训练与高效推理，包括 `LLM Post-training`、`RLHF/GRPO`、`CoT Reasoning` 与 `MLLM Visual Token Pruning`。欢迎学术合作与交流：`wangyuc@mail.ustc.edu.cn`。

# 🔥 News
- *2026.03* 一作论文 **SepPrune** 被 **ICME 2026** 接收。
- *2026.03* 共同一作论文 **HAWK** 被 **CVPR 2026** 接收。
- *2026* 统一后训练推理增强框架相关工作投稿 **KDD 2026（在审）**。

# 🧭 Research Interests
- LLM Post-training
- RLHF / PPO / GRPO / DPO
- Reasoning Enhancement for Complex Tasks
- Efficient Inference for MLLMs (Training-free Visual Token Pruning)

# 🧪 Internship Experience
- *2025.09 - 2026.02*，**阿里巴巴 Qwen（C 端）算法实习生（LLM Post-training）**
  - 围绕复杂推理任务，探索统一 `SFT + GRPO` 后训练框架。
  - 设计基于 `PPL` 统计特征的自适应损失加权机制，动态平衡监督学习与强化学习损失。
  - 在 AIME24/25 等高难度基准与域外数据上取得显著优于 baseline 的结果，验证困难样本泛化能力。
  - 面向教育场景构建基于 `Qwen3-235B-A22B` 的端到端检错模型，结合数据飞轮与多数投票生成高置信数据。
  - 全量微调并落地部署，审核任务达到 **95.7% precision / 63.2% recall**，支撑夸克教育垂类业务上线。
- *2025.05 - 2025.09*，**华为诺亚方舟实验室 算法实习生（MLLM）**
  - 研究多模态模型视觉 Token 剪枝方法，面向高分辨率输入的长序列推理瓶颈。
  - 设计并实现可即插即用的剪枝框架，在大幅降低推理开销的同时保持接近原始性能。

# 📝 Publications
- **SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models**  
  *First Author*, **Accepted at ICME 2026**
  - 提出训练无关、即插即用的视觉 Token 剪枝框架 SepPrune。
  - 在 Qwen2.5-VL-7B 等模型上，剪除 **80.2%** 视觉 Token 后仍保留 **96.3%** 原始准确率。
- **HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models**  
  *Co-first Author*, **Accepted at CVPR 2026**
  - 提出头部重要性感知的训练无关剪枝框架 HAWK。
  - 通过“静态先验 + 动态感知”的评估机制，提升视觉 Token 筛选效率与精度。

# 🧩 Skills
- **Core**: LLM Post-training, RLHF, PPO, GRPO, DPO, CoT Reasoning, Data Synthesis
- **Frameworks/Tools**: PyTorch, Verl, Swift, vLLM, Transformers

# 🎖 Honors and Awards
- *2025* 中国科学技术大学硕士一等学业奖学金
- *2022* 中国大学生数学建模竞赛北京赛区二等奖

# 📖 Education
- *2024.09 - 2027.06 (Now)*，Master，Computer Technology，University of Science and Technology of China
- *2020.09 - 2024.06*，Bachelor，New Energy Science and Engineering，North China Electric Power University
