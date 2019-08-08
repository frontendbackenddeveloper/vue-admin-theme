<template>
  <div class="va-row bottom-widgets">
    <div class="flex md6 xs12">
      <vuestic-widget class="no-h-padding no-v-padding">
        <vuestic-feed :initialPosts="posts"></vuestic-feed>
      </vuestic-widget>
    </div>
    <div class="flex md6 xs12">
      <vuestic-widget class="business-posts">
        <vuestic-social-news
          class="vuestic-social-news" :news="news"
          :url="'#'"
        />
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-bottom-widgets',

  data () {
    return {
      posts: [
        {
          name: 'Irina Myatelskaya',
          text: 'joined the network',
          photoURL: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg',
        },
        {
          name: 'Andrei Hrabouski',
          text: 'has just started a live video',
          photoURL: 'https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',
        },
        {
          name: 'Evan You',
          text: 'joined the network',
          photoURL: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        },
      ],
      news: [
        {
          photoURL: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
        },
        {
          photoURL: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          photoURL: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Mahindra-XUV300/6727/1558499511813/front-left-side-47.jpg?tr=w-375',
        },
        {
          photoURL: 'https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg',
        },
        {
          photoURL: 'https://s3.reutersmedia.net/resources/r/?d=20190502&i=RCV006O97&w=&r=RCV006O97&t=2',
        },
        {
          photoURL: 'https://www.w3schools.com/howto/img_forest.jpg',
        },
        {
          photoURL: 'https://cdn.cnn.com/cnnnext/dam/assets/190121090951-04-blood-moon-global-01212019-exlarge-169.jpg',
        },
        {
          photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-qKxv_sDOMxYNz_-yYrwElcOVIyj9qusYZ0Nd-4y6QSVMkpi',
        },
        {
          photoURL: 'https://static-news.moneycontrol.com/static-mcnews/2019/04/PIA20027-770x433.jpg',
        },
        {
          photoURL: 'https://www.gettyimages.co.uk/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg',
        },
        {
          photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UCQ0lyYzWXc3pWtEvHl1jN66yqjQ6XUYroZiunEqigaQRQhV',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.bottom-widgets {
  > div[class^='col'] {
    & > div {
      width: 100%;
    }
  }
}
</style>
