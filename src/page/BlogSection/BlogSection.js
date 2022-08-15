import React from "react";
import "./BlogSection.css";
import "./BlogSectionReponsive.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { Button } from "react-bootstrap";
import MainLayout from "../../layout/MainLayout";
import ArticleBlogSection from "./../../components/articlcBolgSection/AritcleBlogSection";
import BlogSectionArticleBg from "./../../img/BlogSectionArticleBg.jpg";
const BlogSection = (props) => {
  return (
    <MainLayout>
      <div className="BlogSection__container">
        <section className="BlogSection__header">
          <div className="BlogSection__header--img">
            <img src={props.img} alt="Hình ảnh"></img>
            <div className="overlay"></div>
          </div>
          <div className="BlogSection__header--title">
            <h1>{props.title}</h1>
          </div>
          <div className="BlogSection__header--desc">
            <p>{props.desc}</p>
          </div>
          <div className="BlogSection__header--button">
            <div className="header__button--follow">
              <Button>
                {" "}
                <span>+ </span> Theo dõi
              </Button>
            </div>

            <div className="header__button--wrap">
              <FiFacebook />
            </div>
            <div className="header__button--wrap">
              <BiLinkAlt />
            </div>
          </div>
        </section>
        <section className="BlogSection__body">
          <section className="BlogSection__body--part1">
            <div className="part1__content">
              <Row>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
                <Col xs={12} sm={6} lg={6} xl={4}>
                  {" "}
                  <ArticleBlogSection
                    image={BlogSectionArticleBg}
                    topic="XU HƯỚNG CUỘC SỐNG"
                    title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                    desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                    timePost="16 giờ trước"
                  />
                </Col>
              </Row>

              {/* <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              />
              <ArticleBlogSection
                image={BlogSectionArticleBg}
                topic="XU HƯỚNG CUỘC SỐNG"
                title="Cái chết của em bé 12 tuổi và câu hỏi lớn về quyền định đoạt sự sống"
                desc="Ai là người có quyền quyết định khi nào một sự sống không đáng để tiếp tục?"
                timePost="16 giờ trước"
              /> */}
            </div>
            <div className="part1__button">
              <Button>Xem thêm bài viết</Button>
            </div>
          </section>
          <section className="BlogSection__body--part2">
            <div className="part2__header">
              <h2>CÓ THỂ BẠN SẼ THÍCH</h2>
            </div>
            <div className="part2__content">
              <Row>
                <Col xs={12} lg={6}>
                  <div className="part2__content--colItem">
                    <div className="mainArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        follow="24.9"
                        title="Cởi Mở"
                        desc="Series về những trải nghiệm tình dục đầu tiên."
                      />
                    </div>
                    <div className="subArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                    </div>
                    <div className="link__watchMore">
                      <a href="#">
                        <span>Xem tất cả bài viết</span> <AiOutlineRight />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className="part2__content--colItem">
                    <div className="mainArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        follow="24.9"
                        title="Cởi Mở"
                        desc="Series về những trải nghiệm tình dục đầu tiên."
                      />
                    </div>
                    <div className="subArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                    </div>
                    <div className="link__watchMore">
                      <a href="#">
                        <span>Xem tất cả bài viết</span> <AiOutlineRight />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                  <div className="part2__content--colItem">
                    <div className="mainArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        follow="24.9"
                        title="Cởi Mở"
                        desc="Series về những trải nghiệm tình dục đầu tiên."
                      />
                    </div>
                    <div className="subArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                    </div>
                    <div className="link__watchMore">
                      <a href="#">
                        <span>Xem tất cả bài viết</span> <AiOutlineRight />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className="part2__content--colItem">
                    <div className="mainArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        follow="24.9"
                        title="Cởi Mở"
                        desc="Series về những trải nghiệm tình dục đầu tiên."
                      />
                    </div>
                    <div className="subArticle">
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                      <ArticleBlogSection
                        image={BlogSectionArticleBg}
                        topic="THƯƠNG"
                        title="Cởi Mở: Lần đầu lên giường với nhiều hơn một người"
                      />
                    </div>
                    <div className="link__watchMore">
                      <a href="#">
                        <span>Xem tất cả bài viết</span> <AiOutlineRight />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="part2__button">
              <Button>
                Xem thêm series <AiOutlineDown />
              </Button>
            </div>
          </section>
        </section>
      </div>
    </MainLayout>
  );
};

export default BlogSection;
