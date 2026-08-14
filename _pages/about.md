---
permalink: /
title: ""
excerpt: "Yuchen Wang is an M.S. candidate at USTC working on LLM post-training, reinforcement learning, on-policy distillation, and efficient multimodal inference."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-hero" id="about-me" aria-labelledby="profile-name">
  <div class="profile-hero__copy">
    <p class="profile-hero__eyebrow">LLM Post-training · Multimodal Learning</p>
    <h1 id="profile-name">Yuchen Wang <span lang="zh-CN">王煜晨</span></h1>
    <p class="profile-hero__role">M.S. Candidate in Computer Technology at USTC</p>
    <p class="profile-hero__intro">
      I work on post-training systems that make language and multimodal models more capable, reliable, and efficient. My current interests include reinforcement learning for reasoning, on-policy self-distillation, and training-free visual token pruning.
    </p>
    <p class="profile-hero__current">
      Currently, I am an LLM Algorithm Engineer Intern with ByteDance Data - Douyin, developing agentic reinforcement learning methods for reliable multi-turn customer-service models. I am advised by Prof. Xiaoyan Sun at the University of Science and Technology of China.
    </p>
    <div class="profile-hero__actions" aria-label="Contact and profile links">
      <a class="profile-button profile-button--primary" href="mailto:wangyuc@mail.ustc.edu.cn"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
      <a class="profile-button" href="https://github.com/sansanyuchen"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
    </div>
    <dl class="profile-hero__meta">
      <div><dt>Based in</dt><dd>Hefei, China</dd></div>
      <div><dt>Current role</dt><dd>ByteDance Data - Douyin</dd></div>
      <div><dt>Open to</dt><dd>Research collaboration</dd></div>
    </dl>
  </div>
  <figure class="profile-hero__portrait">
    <img src="{{ '/images/android-chrome-512x512.png' | relative_url }}" alt="Portrait of Yuchen Wang">
  </figure>
</section>

<section class="site-section" id="research" aria-labelledby="research-heading">
  <header class="section-heading">
    <p class="section-kicker">Research</p>
    <h2 id="research-heading">Problems I care about</h2>
    <p>I study the learning signals and inference mechanisms that help foundation models reason better without making deployment unnecessarily expensive.</p>
  </header>
  <div class="research-grid">
    <article class="research-item">
      <span class="research-item__number">01</span>
      <h3>Reasoning & Reinforcement Learning</h3>
      <p>Balancing expert guidance and on-policy exploration for hard reasoning tasks with sparse rewards.</p>
    </article>
    <article class="research-item">
      <span class="research-item__number">02</span>
      <h3>On-Policy Distillation</h3>
      <p>Turning naturally available privileged information into dense supervision for efficient self-improvement.</p>
    </article>
    <article class="research-item">
      <span class="research-item__number">03</span>
      <h3>Efficient Multimodal Inference</h3>
      <p>Pruning redundant visual tokens while preserving the information required for accurate multimodal reasoning.</p>
    </article>
  </div>
</section>

<section class="site-section" id="news" aria-labelledby="news-heading">
  <header class="section-heading section-heading--compact">
    <p class="section-kicker">Updates</p>
    <h2 id="news-heading">News</h2>
  </header>
  <div class="news-list">
    <article><time datetime="2026-07">Jul 2026</time><p><strong>RP-OPSD</strong> and <strong>SepPrune</strong> are now available on arXiv.</p></article>
    <article><time datetime="2026-05">May 2026</time><p><strong>APEX</strong> was submitted to EMNLP 2026.</p></article>
    <article><time datetime="2026-04">Apr 2026</time><p>Joined <strong>ByteDance Data - Douyin</strong> as an LLM Algorithm Engineer Intern.</p></article>
    <article><time datetime="2026-03">Mar 2026</time><p><strong>SepPrune</strong> was accepted by ICME 2026, and <strong>HAWK</strong> was accepted by CVPR 2026.</p></article>
  </div>
</section>

<section class="site-section" id="experience" aria-labelledby="experience-heading">
  <header class="section-heading">
    <p class="section-kicker">Industry Research</p>
    <h2 id="experience-heading">Experience</h2>
    <p>Applied research across reliable agentic systems, reasoning-oriented post-training, and efficient multimodal inference.</p>
  </header>
  <div class="experience-list">
    <article class="experience-item">
      <div class="experience-item__logo"><img src="{{ '/images/company-icons/bytedance.svg' | relative_url }}" alt="ByteDance logo"></div>
      <div class="experience-item__content">
        <div class="experience-item__heading">
          <div>
            <h3>ByteDance <span>Data - Douyin</span></h3>
            <p class="experience-item__role">LLM Algorithm Engineer Intern</p>
          </div>
          <time datetime="2026-04">Apr 2026 - Present</time>
        </div>
        <ul>
          <li>Develop agentic reinforcement learning methods for reliable multi-turn customer-service models.</li>
          <li>Design adversarial user simulation, factuality-oriented reward signals, and outcome-grounded session evaluation for open-ended dialogue.</li>
        </ul>
      </div>
    </article>

    <article class="experience-item">
      <div class="experience-item__logo"><img src="{{ '/images/company-icons/alibaba.svg' | relative_url }}" alt="Alibaba logo"></div>
      <div class="experience-item__content">
        <div class="experience-item__heading">
          <div>
            <h3>Alibaba <span>Qwen Consumer</span></h3>
            <p class="experience-item__role">LLM Algorithm Engineer Intern</p>
          </div>
          <time datetime="2025-09">Sep 2025 - Feb 2026</time>
        </div>
        <ul>
          <li>Proposed APEX, a unified SFT-RL framework that adaptively balances off-policy guidance and on-policy GRPO exploration.</li>
          <li>Built and deployed an education-content verifier, covering data synthesis, full-parameter fine-tuning, reward design, and FP8 inference.</li>
        </ul>
      </div>
    </article>

    <article class="experience-item">
      <div class="experience-item__logo"><img src="{{ '/images/company-icons/huawei.svg' | relative_url }}" alt="Huawei logo"></div>
      <div class="experience-item__content">
        <div class="experience-item__heading">
          <div>
            <h3>Huawei <span>Noah's Ark Lab</span></h3>
            <p class="experience-item__role">Multimodal Algorithm Engineer Intern</p>
          </div>
          <time datetime="2025-05">May 2025 - Sep 2025</time>
        </div>
        <ul>
          <li>Designed training-free visual token pruning methods for high-resolution image and video inputs.</li>
          <li>Developed SepPrune and contributed to HAWK, resulting in publications at ICME 2026 and CVPR 2026.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

<section class="site-section" id="publications" aria-labelledby="publications-heading">
  <header class="section-heading">
    <p class="section-kicker">Selected Work</p>
    <h2 id="publications-heading">Publications</h2>
    <p><strong>Yuchen Wang</strong> denotes my authorship; * denotes equal contribution.</p>
  </header>
  <div class="publication-list">
    <article class="publication-item">
      <div class="publication-item__body">
        <h3>RP-OPSD: Resolution-Privileged On-Policy Self-Distillation for Multimodal Large Language Models</h3>
        <p class="publication-item__authors">Qihui Zhu*, <strong>Yuchen Wang*</strong>, Zijian Wen, Tao Zhang, Mengjie Zhang, et al.</p>
        <p class="publication-item__summary">Uses the capability gap between original- and low-resolution views as privileged supervision, improving Qwen3.5-4B/9B by 4.63/4.16 points on average and accelerating 9B training by 1.78x.</p>
        <p class="publication-item__links"><a href="https://arxiv.org/abs/2607.24447">arXiv <span aria-hidden="true">↗</span></a></p>
      </div>
      <div class="publication-item__venue"><strong>AAAI 2027</strong><span>Under review</span></div>
    </article>

    <article class="publication-item">
      <div class="publication-item__body">
        <h3>APEX: Adaptively Balancing Off-Policy Guidance and On-Policy Exploration for LLM Reasoning</h3>
        <p class="publication-item__authors"><strong>Yuchen Wang</strong>, et al. · First author</p>
        <p class="publication-item__summary">Adapts the balance between expert supervision and on-policy exploration using policy-data compatibility, improving Pass@1 by 7.10 points across six math benchmarks and by 15.50 points across three general reasoning benchmarks.</p>
      </div>
      <div class="publication-item__venue"><strong>EMNLP 2026</strong><span>Under review</span></div>
    </article>

    <article class="publication-item">
      <div class="publication-item__body">
        <h3>SepPrune: A Separator-based Pruning Framework for Efficient Multimodal Large Language Models</h3>
        <p class="publication-item__authors"><strong>Yuchen Wang</strong>, Qihui Zhu, Yang Liu, Xiaoyan Sun, Siying Wu · First author</p>
        <p class="publication-item__summary">A training-free, plug-and-play method that uses modality separators to rank visual tokens, retaining 96.3% of original performance after removing 80.2% of visual tokens.</p>
        <p class="publication-item__links"><a href="https://arxiv.org/abs/2607.25818">arXiv <span aria-hidden="true">↗</span></a></p>
      </div>
      <div class="publication-item__venue"><strong>ICME 2026</strong><span>Accepted</span></div>
    </article>

    <article class="publication-item">
      <div class="publication-item__body">
        <h3>HAWK: Head Importance-Aware Visual Token Pruning in Multimodal Models</h3>
        <p class="publication-item__authors">Qihui Zhu, Tao Zhang, <strong>Yuchen Wang</strong>, Zijian Wen, Mengjie Zhang, et al.</p>
        <p class="publication-item__summary">Combines head-importance priors with text-guided attention for training-free pruning, delivering 1.34x end-to-end speedup at an 80% pruning ratio on Qwen2.5-VL-7B.</p>
        <p class="publication-item__links"><a href="https://arxiv.org/abs/2604.07812">arXiv <span aria-hidden="true">↗</span></a><a href="https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_HAWK_Head_Importance-Aware_Visual_Token_Pruning_in_Multimodal_Models_CVPR_2026_paper.pdf">CVF paper <span aria-hidden="true">↗</span></a><a href="https://github.com/peppery77/HAWK">Code <span aria-hidden="true">↗</span></a></p>
      </div>
      <div class="publication-item__venue"><strong>CVPR 2026</strong><span>Accepted</span></div>
    </article>
  </div>
</section>

<div class="profile-details-grid">
  <section class="site-section detail-panel" id="education" aria-labelledby="education-heading">
    <header class="section-heading section-heading--compact">
      <p class="section-kicker">Background</p>
      <h2 id="education-heading">Education</h2>
    </header>
    <div class="education-list">
      <article>
        <time datetime="2024-09">2024 - 2027</time>
        <h3>University of Science and Technology of China</h3>
        <p>M.S. in Computer Technology<br>Advisor: Prof. Xiaoyan Sun</p>
      </article>
      <article>
        <time datetime="2020-09">2020 - 2024</time>
        <h3>North China Electric Power University</h3>
        <p>B.Eng. in New Energy Science and Engineering</p>
      </article>
    </div>
  </section>

  <section class="site-section detail-panel" id="honors" aria-labelledby="honors-heading">
    <header class="section-heading section-heading--compact">
      <p class="section-kicker">Recognition</p>
      <h2 id="honors-heading">Honors</h2>
    </header>
    <ul class="honors-list">
      <li><span>Perseverance & Innovation Scholarship, USTC</span><time>2025 - 2026</time></li>
      <li><span>First-Class Graduate Scholarship, USTC</span><time>2025</time></li>
      <li><span>Second-Class Graduate Scholarship, USTC</span><time>2024 - 2025</time></li>
      <li><span>Second Prize, Beijing Division of CUMCM</span><time>2022</time></li>
    </ul>
  </section>
</div>

<section class="site-section toolkit" id="skills" aria-labelledby="skills-heading">
  <header class="section-heading section-heading--compact">
    <p class="section-kicker">Methods & Engineering</p>
    <h2 id="skills-heading">Toolkit</h2>
  </header>
  <dl class="toolkit-list">
    <div><dt>Post-training</dt><dd>SFT, RLHF, PPO, GRPO, DPO, on-policy distillation, chain-of-thought reasoning</dd></div>
    <div><dt>Data & evaluation</dt><dd>Data flywheels, high-confidence synthesis, verifier training, benchmark construction</dd></div>
    <div><dt>Engineering</dt><dd>Python, PyTorch, Transformers, Ray, verl, ms-swift, vLLM</dd></div>
  </dl>
</section>

<section class="contact-strip" aria-labelledby="contact-heading">
  <div>
    <p class="section-kicker">Contact</p>
    <h2 id="contact-heading">Interested in related research?</h2>
    <p>I am happy to discuss LLM post-training, reasoning, and efficient multimodal systems.</p>
  </div>
  <a class="profile-button profile-button--light" href="mailto:wangyuc@mail.ustc.edu.cn">wangyuc@mail.ustc.edu.cn</a>
</section>
