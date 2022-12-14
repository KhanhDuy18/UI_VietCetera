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
import LoginFormHomePage from "../../components/loginForm/LoginFormHomePage";
const listIndex = [1, 2, 3, 4, 5];
const HomePage = () => {
  
  return (
    <MainLayout>
      <div className="homepage__containner">
        <section className="homepage__section1">
          <Row>
            <div className="homepage__section--header">
              <h2>
                M???I<br></br> NH???T
              </h2>
            </div>
          </Row>
          <Row>
            <div className="homepage__section1--body">
              <Row className="MainPodcast">
                <Col xs={12} md={6}  className="MainPodcast__col">
                  <MainPodcast
                    background={MainPodcastBg}
                    contentTitle="Khoe 'c???u l????ng' tr??n m???ng c?? ph???i l?? bi???u hi???n c???a s??? b???t an?"
                    contentField="T??m l?? h???c"
                  />
                </Col>
                <Col xs={12} md={6} className="MainPodcast__col">
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="T??m l?? h???c"
                    contentTitle="Khoe 'c???u l????ng' tr??n m???ng c?? ph???i l?? bi???u hi???n c???a s??? b???t an?"
                  />
                </Col>
              </Row>
              <Row className="Articles">
                <Col xs={12} md={12} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                </Col>
                <Col xs={12} md={12} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    avt={ArticleAvt}
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                </Col>
                <Col xs={12} md={12} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    avt={ArticleAvt}
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                </Col>
                <Col xs={12} md={12} xl={3} className="Articles__col">
                  <AritcleMain
                    image={ArticleImg}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    avt={ArticleAvt}
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                </Col>
              </Row>
            </div>
          </Row>
        </section>
        <section className="homepage__section2">
          <SectionQuestion
            question="B???n th?????ng c???m th???y c?? ????n l??c n??o?"
            vote="135"
            listOptions={[
              { content: "L??c ??? m???t m??nh", value: 16 },
              { content: "??? nhi???u m??nh nh??ng kh??ng vui", value: 16 },
              { content: "Ch??? c??ng vi???c b???u b???n", value: 54 },
              { content: "L?????t web c??? ng??y", value: 22 },
              { content: "L?????t web c??? ng??y", value: 3 },
            ]}
            image={SectionQuestionImg}
          />
        </section>
        <section className="homepage__section3">
          <Row>
            <div className="homepage__section--header">
              <h2>
                T??m<br></br> l???i l??
              </h2>
            </div>
          </Row>
          <Row>
            <div className="homepage__section3--body">
              <div className="section3__bod--desc">
                <p>
                  Tr??? l???i ng???n g???n c??c c??u h???i quan tr???ng nh???t xung quanh m???t s???
                  ki???n: Ai? L??m g??? Khi n??o? ??? ????u? Bao nhi??u? Nh?? th??? n??o? T???i
                  sao? XEM T???T C???
                </p>
              </div>
              <div className="section3__bod--button">
                <Button>
                  <span>XEM T???T C???</span>
                </Button>
              </div>
              <Row className="section3__bod--main">
                <Col xs={12} sm={6}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentTitle="Ba n?????c ch??u ??u t??? ch???i h??? chi???u m???i c???a Vi???t Nam"
                    contentField="Xu h?????ng cu???c s???ng"
                    dateTime="04 Thg 08"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentTitle="Ba n?????c ch??u ??u t??? ch???i h??? chi???u m???i c???a Vi???t Nam"
                    contentField="Xu h?????ng cu???c s???ng"
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
                XU<br></br> H?????NG
              </h2>
            </div>
            <div className="section4__left--body">
              {listIndex.map((index) => {
                return (
                  <VerticalPodcast
                    index={index}
                    img={VerticalPodcastImg}
                    title="Pi Network: Khi n??o ?????ng Pi c?? gi?? ngh??n ?????"
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
                NGHE G??
                <br></br> H??M NAY
              </h2>
            </div>
            <div className="section5__left--body">
              <MainListenPodcast
                image={MainListenImg}
                contentField="B??t t???t"
                dateTime="2 ng??y tr?????c"
                contentTitle="B??t T???t #173: Cha m??? ?????c h???i"
              />
            </div>
          </div>
          <div className="homepage__section5--right"> 
            <div className="section5__right--listListen">
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ng??y tr?????c"
                contentTitle="#88 Travel blogger Ho??ng L?? Giang: Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i?"
              />
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ng??y tr?????c"
                contentTitle="#88 Travel blogger Ho??ng L?? Giang: Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i?"
              />
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ng??y tr?????c"
                contentTitle="#88 Travel blogger Ho??ng L?? Giang: Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i?"
              />
              <SubListenPodcast
                image={SubListenImg}
                contentField="Have a sip"
                dateTime="2 ng??y tr?????c"
                contentTitle="#88 Travel blogger Ho??ng L?? Giang: Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i?"
              />
            </div>
          </div>
          <div className="homepage__section5--button">
              <Button>
                <span>NGHE T???T C???</span>
              </Button>
            </div>
          <div className="homepage__section5--bottom">
            <img src={BannerSection5} alt="Banner"></img>
          </div>
        </section>

        <section className="homepage__section6">
          <div className="homepage__section--header">
            <h2>
              XEM G??<br></br> H??M NAY
            </h2>
          </div>
          <div className="homepage__section6--body">
            <div className="section6__body--button">
              <Button>
                <span>XEM T???T C???</span>
              </Button>
            </div>
            <div className="section6__body--mainVideo">
              <MainVideo
                posterVideo={MainVideoBg}
                videoTitle="Hi???u lu???t m???i kh??ng b??? ???qu???t??? - L????ng Th??? Huy, Vi???n tr?????ng Vi???n iSEE | C???i M??? SS2 EP11"
                totalTime="53:11"
                toltalView="1.9"
              />
            </div>
            <div className="section6__body--listSubvideo">
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i? - Travel blogger Ho??ng L?? Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i? - Travel blogger Ho??ng L?? Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i? - Travel blogger Ho??ng L?? Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SubvVideo
                    image={SubVideoBg}
                    videoTitle="Ch??ng ta ch???ng ph???i c?? c??? ?????i ????? ??i? - Travel blogger Ho??ng L?? Giang"
                    totalTime="53:11"
                    toltalView="1.9"
                  />
                </Col>
              </Row>
            </div>
          </div>
          <LoginFormHomePage img={Section6FooterImg}/>
          {/* <div className="homepage__section6--footer">
            <div className="section6--footer__left">
              <div className="section6__footer--img">
                <img src={Section6FooterImg}></img>
              </div>
            </div>
            <div className="section6--footer__right">
              <div className="section6__footer--content">
                <div className="title">
                  <p>
                    <span>5 tin t???c </span>b???n c???n bi???t m???i tu???n
                  </p>
                </div>
                <div className="desc">
                  <p>
                    5 tin t???c b???n c???n bi???t m???i tu???n M???i th??? T??, b???n s??? nh???n ???????c
                    email t???ng h???p nh???ng tin t???c n???i b???t tu???n qua m???t c??ch s??c
                    t??ch, d??? hi???u, v?? ho??n to??n mi???n ph??!
                  </p>
                </div>
              </div>
              <div className="section6__footer--form">
                <form>
                  <div className="formInpunt">
                    <input placeholder="Nh???p ?????a ch??? email c???a b???n" />
                  </div>
                  <Button type="submit">
                    <span>????NG K??!</span>
                  </Button>
                </form>
              </div>
            </div>
          </div> */}
        </section>
        <section className="homepage__section7">
          <div className="homepage__section--header">
            <h2>
              CU???C <br></br> S???NG
            </h2>
          </div>
          <div className="homepage__section7--body">
            <Row>
              <Col xs={12} lg={6} className="section7__body--left">
              <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    desc="???2 ngh??n hai chi???c cu ???? 1 ngh??n??? nh??ng kh??ng c??n ti???n l??? ????? mua???"
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
              </Col>
              <Col xs={12} lg={6} className="section7__body--right">
                <Row className="item-special">
                  <Col xs={12} lg={6} >
                  <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                  </Col>
                  <Col xs={12} lg={6} >
                    <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6}>
                    <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                  </Col>
                  <Col xs={12} lg={6}>
                    <AritcleMain
                    image={ArticleImg}
                    avt={ArticleAvt}
                    topic="Th????ng"
                    title="C???i M???: T??i l?? ???gynosexual??? - t??i y??u t??nh n???"
                    userName="Long V??"
                    timePost="21 gi??? tr?????c"
                  />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="homepage__section7--button">
            <Button>
                <span>XEM T???T C???</span>
              </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
