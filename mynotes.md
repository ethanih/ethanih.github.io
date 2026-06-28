---
layout: default
title: Notes
description: Course notes by GUO Yiheng.
permalink: /mynotes/
---

<section class="notes-intro">
  <p class="eyebrow">Course Notes</p>
  <h1>Notes</h1>
  <p>Some of my handwritten notes :)</p>
</section>

<section class="course-grid" aria-label="Course note list">
  {% for course in site.data.notes %}
    <details class="course" open>
      <summary class="course-header">
        <h2>{{ course.course }}</h2>
        <span class="count">{{ course.notes | size }} notes</span>
      </summary>
      <ul class="note-list">
        {% for note in course.notes %}
          <li><a href="{{ note.file | relative_url }}">{{ note.title }}</a></li>
        {% endfor %}
      </ul>
    </details>
  {% endfor %}
</section>
