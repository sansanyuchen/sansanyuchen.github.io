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

<style>
  .lang-switch {
    margin: 0 0 1rem 0;
  }
  .lang-switch button {
    border: 1px solid #999;
    background: #fff;
    color: #333;
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .lang-switch button.active {
    background: #333;
    color: #fff;
  }
</style>

<div class="lang-switch">
  <button id="lang-zh-btn" type="button">中文</button>
  <button id="lang-en-btn" type="button">English</button>
</div>

<section id="about-me">
<div class="lang-zh">

# 关于我
我是中国科学技术大学（USTC）计算机技术硕士研究生（2024.09 - 2027.06），本科毕业于华北电力大学（2020.09 - 2024.06）。研究方向聚焦于大模型后训练与高效推理。

联系方式：`wangyuc@mail.ustc.edu.cn`

</div>
<div class="lang-en">

# About Me
I am an M.S. student in Computer Technology at USTC (2024.09 - 2027.06), with a B.E. degree from North China Electric Power University (2020.09 - 2024.06). My research focuses on LLM post-training and efficient inference.

Contact: `wangyuc@mail.ustc.edu.cn`

</div>
</section>

<section id="news">
<div class="lang-zh">

# 动态
- *2026.03* 一作论文 **SepPrune** 被 **ICME 2026** 接收。
- *2026.03* 共同一作论文 **HAWK** 被 **CVPR 2026** 接收。
- *2026* 统一后训练推理增强框架相关工作投稿 **KDD 2026（在审）**。

</div>
<div class="lang-en">

# News
- *2026.03* **SepPrune** accepted by **ICME 2026** (First Author).
- *2026.03* **HAWK** accepted by **CVPR 2026** (Co-first Author).
- *2026* Unified post-training reasoning framework submitted to **KDD 2026**.

</div>
</section>

<section id="interests">
<div class="lang-zh">

# 研究方向
- LLM Post-training
- RLHF / PPO / GRPO / DPO
- CoT Reasoning for complex tasks
- Efficient Inference for MLLMs (training-free visual token pruning)

</div>
<div class="lang-en">

# Research Interests
- LLM Post-training
- RLHF / PPO / GRPO / DPO
- CoT Reasoning for complex tasks
- Efficient Inference for MLLMs (training-free visual token pruning)

</div>
</section>

<section id="internships">
<div class="lang-zh">

# 实习经历
- *2025.09 - 2026.02* 阿里巴巴 Qwen（C 端）算法实习生（LLM Post-training）。
- 统一 `SFT + GRPO` 后训练框架，提出基于 PPL 的自适应损失加权机制。
- 在 AIME24/25 等推理基准与域外数据上优于 baseline。
- 构建 `Qwen3-235B-A22B` 教育检错模型，离线评估达到 **95.7% precision / 63.2% recall**。
- *2025.05 - 2025.09* 华为诺亚方舟实验室算法实习生（MLLM）。
- 面向高分辨率输入设计训练无关视觉 Token 剪枝方法。

</div>
<div class="lang-en">

# Internship Experience
- *2025.09 - 2026.02* Algorithm Intern at Alibaba Qwen (LLM Post-training).
- Proposed a unified `SFT + GRPO` framework with PPL-based adaptive loss weighting.
- Outperformed baselines on AIME24/25 and out-of-domain benchmarks.
- Built an end-to-end verification model with **95.7% precision / 63.2% recall**.
- *2025.05 - 2025.09* Algorithm Intern at Huawei Noah's Ark Lab (MLLM).
- Designed training-free visual token pruning for high-resolution MLLM inference.

</div>
</section>

<section id="publications">
<div class="lang-zh">

# 论文成果
- **SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models**  
  First Author, Accepted at ICME 2026.
- **HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models**  
  Co-first Author, Accepted at CVPR 2026.

</div>
<div class="lang-en">

# Publications
- **SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models**  
  First Author, Accepted at ICME 2026.
- **HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models**  
  Co-first Author, Accepted at CVPR 2026.

</div>
</section>

<section id="skills">
<div class="lang-zh">

# 技能
- Core: LLM Post-training, RLHF, PPO, GRPO, DPO, CoT Reasoning, Data Synthesis
- Frameworks: PyTorch, Verl, Swift, vLLM, Transformers

</div>
<div class="lang-en">

# Skills
- Core: LLM Post-training, RLHF, PPO, GRPO, DPO, CoT Reasoning, Data Synthesis
- Frameworks: PyTorch, Verl, Swift, vLLM, Transformers

</div>
</section>

<section id="honors">
<div class="lang-zh">

# 荣誉奖励
- *2025* 中国科学技术大学硕士一等学业奖学金
- *2022* 中国大学生数学建模竞赛北京赛区二等奖

</div>
<div class="lang-en">

# Honors and Awards
- *2025* First-Class Academic Scholarship, USTC
- *2022* Second Prize, Beijing Division of CUMCM

</div>
</section>

<section id="education">
<div class="lang-zh">

# 教育背景
- *2024.09 - 2027.06 (Now)* Master, Computer Technology, University of Science and Technology of China
- *2020.09 - 2024.06* Bachelor, New Energy Science and Engineering, North China Electric Power University

</div>
<div class="lang-en">

# Education
- *2024.09 - 2027.06 (Now)* Master, Computer Technology, University of Science and Technology of China
- *2020.09 - 2024.06* Bachelor, New Energy Science and Engineering, North China Electric Power University

</div>
</section>

<script>
  (function() {
    var zhBtn = document.getElementById("lang-zh-btn");
    var enBtn = document.getElementById("lang-en-btn");
    var zhBlocks = document.querySelectorAll(".lang-zh");
    var enBlocks = document.querySelectorAll(".lang-en");
    var key = "homepage_lang";

    function setLang(lang) {
      var showZh = lang !== "en";
      zhBlocks.forEach(function(el) { el.style.display = showZh ? "" : "none"; });
      enBlocks.forEach(function(el) { el.style.display = showZh ? "none" : ""; });
      zhBtn.classList.toggle("active", showZh);
      enBtn.classList.toggle("active", !showZh);
      try { localStorage.setItem(key, showZh ? "zh" : "en"); } catch (e) {}
    }

    zhBtn.addEventListener("click", function() { setLang("zh"); });
    enBtn.addEventListener("click", function() { setLang("en"); });

    var saved = "zh";
    try { saved = localStorage.getItem(key) || "zh"; } catch (e) {}
    setLang(saved);
  })();
</script>
