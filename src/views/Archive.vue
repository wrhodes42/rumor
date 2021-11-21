<template>
  <div class="archive">
    <h1>Archive</h1>
    <ul>
      <li v-for="post in posts" :key="post._id">
        <a :href="post.pdfLink">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from "../client";

  const postsQuery = 
    `*[_type == "post"]{
        _id,
        title,
        slug,
        'pdfLink' : pdf.asset->url
    }`;

  export default {
    name: "Archive",
    data() {
      return {
        loading: true,
        posts: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.error = this.post = null;
        this.loading = true;

        sanity.fetch(postsQuery).then(
          (postsRes) => {
            this.posts = postsRes;
          },
          (error) => {
            this.error = error;
          }
        );

        this.loading = false;
      }
    }
  };
</script>