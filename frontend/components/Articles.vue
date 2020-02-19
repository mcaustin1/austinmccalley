<template>  
  <div>

    <div class="uk-child-width-1-2" uk-grid>
        <div>
          <router-link v-for="(article, index) in leftArticles" :to="{ name: 'articles-id', params: {id: article.id} }" class="uk-link-reset" v-bind:key="index">
            <div class="uk-card uk-card-muted">
                 <div v-if="article.image" class="uk-card-media-top">
                     <img :src="'http://strapi.quedev.xyz/' + article.image.url" alt="" height="100">
                 </div>
                 <div class="uk-card-body">
                   <small id="category" v-if="article.category" class="uk-text-uppercase">{{ article.category.name }}</small>
                   <h2 id="title" class="uk-text-large blog-title">{{ article.title }}</h2>
                 </div>
             </div>
         </router-link>

        </div>
        <div>
          <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <router-link v-for="(article, index) in rightArticles" :to="{ name: 'articles-id', params: {id: article.id} }" class="uk-link-reset" v-bind:key="index">
              <div class="uk-card uk-card-muted">
                   <div v-if="article.image" class="uk-card-media-top">
                       <img :src="'http://strapi.quedev.xyz/' + article.image.url" alt="" height="100">
                   </div>
                   <div class="uk-card-body">
                     <small id="category" v-if="article.category" class="uk-text-uppercase">{{ article.category.name }}</small>
                     <h2 id="title" class="uk-text-large">{{ article.title }}</h2>
                   </div>
               </div>
             </router-link>
          </div>

        </div>
    </div>

  </div>
</template>

<script>  
import articlesQuery from '~/apollo/queries/article/articles'

export default {  
  props: {
    articles: Array
  },
  computed: {
    leftArticlesCount(){
      return Math.ceil(this.articles.length / 5)
    },
    leftArticles(){
      return this.articles.slice(0, this.leftArticlesCount)
    },
    rightArticles(){
      return this.articles.slice(this.leftArticlesCount, this.articles.length)
    }
  }
}
</script>  