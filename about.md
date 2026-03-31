---
layout: page
permalink: /about/
title: About
---

I'm a tech partner and CTO based in Prague, working at the intersection of cloud infrastructure, DevOps, and AI engineering. I like building things that work — and tinkering with things until they do.

## What I Do

As a Partner at [Enrian Partners](https://enrian.com), I lead technical strategy and delivery for enterprise clients. My day job involves cloud-native architectures, Kubernetes orchestration, CI/CD pipelines, and managing delivery teams in regulated industries like financial services and defense.

My current focus areas:

- **Cloud & Infrastructure** — Azure, Kubernetes, Infrastructure as Code
- **DevOps** — GitLab CI/CD, delivery automation, process engineering
- **AI Engineering** — LLM orchestration, AI-assisted workflows, prompt engineering, integrating AI into dev toolchains
- **Consulting** — Solution design, digital transformation, client advisory

## The Backstory

I started my career at [Ataxo](https://ataxo.com), moving through project management, customer success, and development leadership. Since 2017, I've been at Enrian Partners — first as Senior Delivery Lead, now as Partner with CTO-level responsibilities.

## This Site

This is my personal tech sandbox. Work-related content goes on the company blog. Here I write about the things I tinker with on my own time — macOS automation, home network experiments, shell scripts, and whatever else catches my attention.

## Off the Clock

Father of three, keeper of tarantulas, and occasional mountain biker. When not in front of a terminal, you'll find me shuffling Magic: The Gathering decks, digging through black metal records, or lost in a sci-fi novel. Some of that leaks into the blog.

[Instagram](https://www.instagram.com/aborymCZ/){:target="_blank" rel="noopener noreferrer"} for the occasional photo.

{% if site.posts.size > 0 %}
## Latest Posts

<ul class="post-list">
{% for post in site.posts limit:3 %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>

[All posts &rarr;]({{ site.url }}/blog/)
{% endif %}

<div markdown="0"><a href="{{ site.url }}/contact/" class="btn">Get in touch</a></div>
