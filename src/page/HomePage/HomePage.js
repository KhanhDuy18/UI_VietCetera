import React from "react";
import { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./HomePage.css";
import "./HomePageReponsive.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainPodcast from "../../components/podcast/mainPodcast/MainPodcast";
import MainPodcastBg from "./../../img/mainPodcast-bg.jpg";
import AritcleMain from "../../components/article/AritcleMain";
import ArticleImg from "./../../img/article-img.jpg";
import ArticleAvt from "./../../img/avatar-article.jpg";
import SectionQuestion from "../../components/sectionQuestion/SectionQuestion";
import SectionQuestionImg from "./../../img/img-sectionQuestion.png";
import Section4Banner from "./../../img/banner-section4.png";
import VerticalPodcastImg from "./../../img/verticalPoscast.jpg";
import BannerSection5 from "./../../img/banner-section5.jpg";
import MainListenImg from "./../../img/MainListenImg.jfif";
import SubListenImg from "./../../img/SubListenImg.jfif";
import MainListenPodcast from "../../components/podcast/listenPodcast/MainListenPodcast/MainListenPodcast";
import SubListenPodcast from "../../components/podcast/listenPodcast/subListenPodcast/SubListenPodcast";
import { Button } from "react-bootstrap";
import VerticalPodcast from "../../components/podcast/verticalPodcast/VerticalPodcast";
import MainVideo from "../../components/podcast/mainVideo/MainVideo";
import MainVideoBg from "./../../img/MainVideo-bg.png";
import SubVideoBg from "./../../img/SubVideo-bg.webp";
import SubvVideo from "../../components/podcast/subVideo/SubvVideo";
import Section6FooterImg from "./../../img/section6-footer-bg.png";
const listIndex = [1, 2, 3, 4, 5];
const HomePage = () => {
  
  return (
    <MainLayout>
      <div className="homepage__containner">
        <section className="homepage__section1">
          <Row>
            <div className="homepage__section--header">
              <h2>
                MỚI<br></br> NHẤT
              </h2>
            </div>
          </Row>
          <Row>
            <div className="homepage__section1--body">
              <Row className="MainPodcast">
                <Col xs={12} md={6} className="MainPodcast__col">
                  <MainPodcast
                    background={MainPodcastBg}
                    contentTitle="Khoe 'cẩu lương' trên mạng có phải là biểu hiện của sự bất an?"
                    contentField="Tâm lý học"
                  />
                </Col>
                <Col xs={12} md={6} className="MainPodcast__col">
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Tâm lý học"
                    contentTitle="Khoe 'cẩu lương' trên mạng có phải là biểu hiện của sự bất an?"
                  />
                </Col>
              </Row>
              <Row className="Articles">
                <Col xs={12} md={6} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                </Col>
                <Col xs={12} md={6} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    avt={ArticleAvt}
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                </Col>
                <Col xs={12} md={6} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    avt={ArticleAvt}
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                </Col>
                <Col xs={12} md={6} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    avt={ArticleAvt}
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                </Col>
              </Row>
            </div>
          </Row>
        </section>
        <section className="homepage__section2">
          <SectionQuestion
            question="Bạn thường cảm thấy cô đơn lúc nào?"
            vote="135"
            listOptions={[
              { content: "Lúc ở một mình", value: 16 },
              { content: "Ở nhiều mình nhưng không vui", value: 16 },
              { content: "Chỉ công việc bầu bạn", value: 54 },
              { content: "Lướt web cả ngày", value: 22 },
              { content: "Lướt web cả ngày", value: 3 },
            ]}
            image={SectionQuestionImg}
          />
        </section>
        <section className="homepage__section3">
          <Row>
            <div className="homepage__section--header">
              <h2>
                Tóm<br></br> lại là
              </h2>
            </div>
          </Row>
          <Row>
            <div className="homepage__section3--body">
              <div className="section3__bod--desc">
                <p>
                  Trả lời ngắn gọn các câu hỏi quan trọng nhất xung quanh một sự
                  kiện: Ai? Làm gì? Khi nào? Ở đâu? Bao nhiêu? Như thế nào? Tại
                  sao? XEM TẤT CẢ
                </p>
              </div>
              <div className="section3__bod--button">
                <Button>
                  <span>XEM TẤT CẢ</span>
                </Button>
              </div>
              <Row className="section3__bod--main">
                <Col xs={12} sm={6}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentTitle="Ba nước châu Âu từ chối hộ chiếu mới của Việt Nam"
                    contentField="Xu hướng cuộc sống"
                    dateTime="04 Thg 08"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentTitle="Ba nước châu Âu từ chối hộ chiếu mới của Việt Nam"
                    contentField="Xu hướng cuộc sống"
                    dateTime="04 Thg 08"
                  />
                </Col>
              </Row>
            </div>
          </Row>
        </section>
        <section className="homepage__section4">
          <div className="homepage__section4--left">
            <div className="homepage__section--header">
              <h2>
                XU<br></br> HƯỚNG
              </h2>
            </div>
            <div className="section4__left--body">
              {listIndex.map((index) => {
                return (
                  <VerticalPodcast
                    index={index}
                    img={VerticalPodcastImg}
                    title="Pi Network: Khi nào đồng Pi có giá nghìn đô?"
                  />
                );
              })}
            </div>
          </div>
          <div className="homepage__section4--right">
            <img src={Section4Banner}></img>
          </div>
        </section>
        <section className="homepage__section5">
          <div className="homepage__section5--left">
            <div className="homepage__section--header">
              <h2>
                NGHE GÌ
                <br></br> HÔM NAY
              </h2>
            </div>
            <div className="section5__left--body">
              <MainListenPodcast
                image={MainListenImg}
                contentField="Bít tắt"
                dateTime="2 ngày trước"
                contentTitle="Bít Tất #173: Cha mẹ độc hại"
              />
            </div>
          </div>
          <div className="homepage__section5--right">
            <div className="section5__right--button">
              <Button>
                <span>NGHE TẤT CẢ</span>
              </Button>
            </div>
            <div className="section5__right--listListen">
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ngày trước"
                contentTitle="#88 Travel blogger Hoàng Lê Giang: Chúng ta chẳng phải có cả đời để đi?"
              />
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ngày trước"
                contentTitle="#88 Travel blogger Hoàng Lê Giang: Chúng ta chẳng phải có cả đời để đi?"
              />
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ngày trước"
                contentTitle="#88 Travel blogger Hoàng Lê Giang: Chúng ta chẳng phải có cả đời để đi?"
              />
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ngày trước"
                contentTitle="#88 Travel blogger Hoàng Lê Giang: Chúng ta chẳng phải có cả đời để đi?"
              />
            </div>
          </div>
          <div className="homepage__section5--bottom">
            <img src={BannerSection5} alt="Banner"></img>
          </div>
        </section>

        <section className="homepage__section6">
          <div className="homepage__section--header">
            <h2>
              XEM GÌ<br></br> HÔM NAY
            </h2>
          </div>
          <div className="homepage__section6--body">
            <div className="section6__body--button">
              <Button>
                <span>XEM TẤT CẢ</span>
              </Button>
            </div>
            <div className="section6__body--mainVideo">
              <MainVideo
                posterVideo={MainVideoBg}
                videoTitle="Hiểu luật mới không bị “quật” - Lương Thế Huy, Viện trưởng Viện iSEE | Cởi Mở SS2 EP11"
                totalTime="53:11"
                toltalView="1.9"
              />
            </div>
            <div className="section6__body--listSubvideo">
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Chúng ta chẳng phải có cả đời để đi? - Travel blogger Hoàng Lê Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Chúng ta chẳng phải có cả đời để đi? - Travel blogger Hoàng Lê Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Chúng ta chẳng phải có cả đời để đi? - Travel blogger Hoàng Lê Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Chúng ta chẳng phải có cả đời để đi? - Travel blogger Hoàng Lê Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div className="homepage__section6--footer">
            <div className="section6--footer__left">
              <div className="section6__footer--img">
                <img src={Section6FooterImg}></img>
              </div>
            </div>
            <div className="section6--footer__right">
              <div className="section6__footer--content">
                <div className="title">
                  <p>
                    <span>5 tin tức </span>bạn cần biết mỗi tuần
                  </p>
                </div>
                <div className="desc">
                  <p>
                    5 tin tức bạn cần biết mỗi tuần Mỗi thứ Tư, bạn sẽ nhận được
                    email tổng hợp những tin tức nổi bật tuần qua một cách súc
                    tích, dễ hiểu, và hoàn toàn miễn phí!
                  </p>
                </div>
              </div>
              <div className="section6__footer--form">
                <form>
                  <div className="formInpunt">
                    <input placeholder="Nhập địa chỉ email của bạn" />
                  </div>
                  <Button type="submit">
                    <span>ĐĂNG KÝ!</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="homepage__section7">
          <div className="homepage__section--header">
            <h2>
              CUỘC <br></br> SỐNG
            </h2>
          </div>
          <div className="homepage__section7--body">
            <Row>
              <Col xs={12} lg={6} className="section7__body--left">
              <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    desc="“2 nghìn hai chiếc cu đơ 1 nghìn” nhưng không còn tiền lẻ để mua…"
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
              </Col>
              <Col xs={12} lg={6} className="section7__body--right">
                <Row className="item-special">
                  <Col xs={12} lg={6} >
                  <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                  </Col>
                  <Col xs={12} lg={6} >
                    <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6}>
                    <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                  </Col>
                  <Col xs={12} lg={6}>
                    <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Thương"
                    title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                    userName="Long Vũ"
                    timePost="21 giờ trước"
                  />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="homepage__section7--button">
            <Button>
                <span>XEM TẤT CẢ</span>
              </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
