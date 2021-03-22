<template>
  <div class="art-container">
    <carousel :scrollPerPage="true" :paginationEnabled="false" :perPage="1" :paginationPadding="0">
      <slide v-for="photo in photos" :key="photo.id" >
        <ArtWorkThumbnail :artDetail="photo"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import ArtWorkThumbnail from "@/components/Common/ArtWorkThumbnail";

export default {
  components: {
    ArtWorkThumbnail,
    Carousel, Slide
  },
  name: "PhotographyIndex",
  data () {
    return {
      photos: [
        {
          id: 1,
          name: 'NamoNamas',
          description: 'Dự án “NamoNamas” được thực hiện kể từ năm 2018. Ban đầu, các tác phẩm đơn lẻ được thực hành với chủ đích chuyển hóa năng lượng tiêu cực thành cảm hứng sáng tác. Điểm chung của chúng là được sáng tác vào lúc cái “tôi” rơi vào hố thẳm và trong ý thức xảy ra một cuộc chạy trốn. Lúc này, các cuộc đối thoại được thiết lập để trả lời câu hỏi về sự hợp lý của nó.',
          artist: 'NGUYỄN ĐỨC HÙNG',
          products: "https://i.ibb.co/1JQHLr6/Trang-1.jpg https://i.ibb.co/Wf30bJ4/Trang-2.jpg https://i.ibb.co/fQhgxQx/Trang-5.jpg https://i.ibb.co/Bjyzj8n/Trang-6-s-a.jpg https://i.ibb.co/gF2gKQt/Processed-with-VSCO-with-fv5-preset.jpg https://i.ibb.co/ssZ8p5g/Trang-8.jpg https://i.ibb.co/4jZWrCY/Trang-9.jpg https://i.ibb.co/cwgKXmb/Trang-10.jpg https://i.ibb.co/vxy7syh/Trang-11.jpg https://i.ibb.co/d6scWR3/Trang-13.jpg https://i.ibb.co/BcXJwJ7/Trang-14-s-a.jpg https://i.ibb.co/tB2gn90/Trang-14-15.jpg https://i.ibb.co/4wLkFqj/Trang-15.jpg https://i.ibb.co/Zd1KCHr/Trang-16.jpg https://i.ibb.co/pPywhpd/Trang-17.jpg https://i.ibb.co/C9GMZch/Trang-19.jpg https://i.ibb.co/mbDj6KJ/Trang-20.jpg https://i.ibb.co/pXPwTtX/Trang-21.jpg https://i.ibb.co/wgftcSq/Trang-22.jpg https://i.ibb.co/fqJ5sbW/Trang-23.jpg https://i.ibb.co/r7B6V0Y/Trang-24.jpg https://i.ibb.co/3yS5PHG/Trang-25-s-a.jpg https://i.ibb.co/tQSCPwr/Trang-25-26.jpg https://i.ibb.co/cr6LvmN/Trang-26.jpg https://i.ibb.co/RYQWvgd/Trang-27.jpg https://i.ibb.co/7z25mG5/Trang-28.jpg",
          thumbnail: 'https://i.ibb.co/1JQHLr6/Trang-1.jpg'
        },
        {
          id: 2,
          name: 'NamoNamas',
          description: 'Dự án “NamoNamas” được thực hiện kể từ năm 2018. Ban đầu, các tác phẩm đơn lẻ được thực hành với chủ đích chuyển hóa năng lượng tiêu cực thành cảm hứng sáng tác. Điểm chung của chúng là được sáng tác vào lúc cái “tôi” rơi vào hố thẳm và trong ý thức xảy ra một cuộc chạy trốn. Lúc này, các cuộc đối thoại được thiết lập để trả lời câu hỏi về sự hợp lý của nó.',
          artist: 'NGUYỄN ĐỨC HÙNG',
          products: "",
          thumbnail: 'https://lh3.googleusercontent.com/proxy/anRLkhVIStKYbhQIMVLoS0vYOiaT3ECai7JBPr-PwuMtQG_VCM4Ux7uyxDnwPtcOK7wSOdaUVf1J5h11sRZmfvcFfgx73tc8e-H4waS4NkvK93-3eUmPITz4bGs'
        },
        {
          id: 3,
          name: 'NamoNamas',
          description: 'Dự án “NamoNamas” được thực hiện kể từ năm 2018. Ban đầu, các tác phẩm đơn lẻ được thực hành với chủ đích chuyển hóa năng lượng tiêu cực thành cảm hứng sáng tác. Điểm chung của chúng là được sáng tác vào lúc cái “tôi” rơi vào hố thẳm và trong ý thức xảy ra một cuộc chạy trốn. Lúc này, các cuộc đối thoại được thiết lập để trả lời câu hỏi về sự hợp lý của nó.',
          artist: 'NGUYỄN ĐỨC HÙNG',
          thumbnail: 'https://lh3.googleusercontent.com/proxy/anRLkhVIStKYbhQIMVLoS0vYOiaT3ECai7JBPr-PwuMtQG_VCM4Ux7uyxDnwPtcOK7wSOdaUVf1J5h11sRZmfvcFfgx73tc8e-H4waS4NkvK93-3eUmPITz4bGs'
        },
        {
          id: 4,
          name: 'NamoNamas',
          description: 'Dự án “NamoNamas” được thực hiện kể từ năm 2018. Ban đầu, các tác phẩm đơn lẻ được thực hành với chủ đích chuyển hóa năng lượng tiêu cực thành cảm hứng sáng tác. Điểm chung của chúng là được sáng tác vào lúc cái “tôi” rơi vào hố thẳm và trong ý thức xảy ra một cuộc chạy trốn. Lúc này, các cuộc đối thoại được thiết lập để trả lời câu hỏi về sự hợp lý của nó.',
          artist: 'NGUYỄN ĐỨC HÙNG',
          thumbnail: 'https://lh3.googleusercontent.com/proxy/anRLkhVIStKYbhQIMVLoS0vYOiaT3ECai7JBPr-PwuMtQG_VCM4Ux7uyxDnwPtcOK7wSOdaUVf1J5h11sRZmfvcFfgx73tc8e-H4waS4NkvK93-3eUmPITz4bGs'
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
