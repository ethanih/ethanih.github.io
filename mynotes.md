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
    <article class="course">
      <div class="course-header">
        <h2>{{ course.course }}</h2>
        <span class="count">{{ course.notes | size }} notes</span>
      </div>
      <ul class="note-list">
        {% for note in course.notes %}
          {% assign note_file = note.file | default: "" %}
          {% assign matching_files = site.static_files | where: "path", note_file %}
          <li>
            {% if note_file != "" and matching_files.size > 0 %}
              <a href="{{ note_file | relative_url }}">{{ note.title }}</a>
            {% else %}
              <span class="note-unavailable">{{ note.title }}</span>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </article>
  {% endfor %}
</section>
