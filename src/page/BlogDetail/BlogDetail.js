import React from "react";
import "./BlogDetail.css";
import "./BlogDetailReponsive.css";
import MainLayout from "../../layout/MainLayout";
import { FaFacebook } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { GiCardRandom } from "react-icons/gi";
import Section6FooterImg from "./../../img/section6-footer-bg.png";
import headerBlogDetailPoster from "./../../img/header-blogDetail-poster.jpg";
import VerticalPodcast from "../../components/podcast/verticalPodcast/VerticalPodcast";
import VerticalPodcastImg from "./../../img/verticalPoscast.jpg";
import VerticalAritcleMain from "../../components/article/VerticalArticle";
import MainPodcast from "../../components/podcast/mainPodcast/MainPodcast";
import MainPodcastBg from "./../../img/mainPodcast-bg.jpg";
import AritcleMain from "../../components/article/AritcleMain";
import ArticleImg from "./../../img/article-img.jpg";
import ArticleAvt from "./../../img/avatar-article.jpg";
import AdvBlogDetail from "./../../img/adv-blogDetail.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
const listIndex = [1, 2, 3, 4, 5];
const BlogDetail = (props) => {
  return (
    <MainLayout>
      <div className="BlogDetail__containner">
        <div className="BlogDetail__header">
          <div className="BlogDetail_header--info">
            <div className="header__info--timePost">
              <p>19 giờ trước</p>
            </div>
            <div className="header__info--linkLocation">
              <div>
                <a href="#">CUỘC SỐNG</a>
              </div>
              <div className="linkLocation__icon">
                <AiOutlineRight />
              </div>

              <div>
                <a href="#">XU HƯỚNG CUỘC SỐNG</a>
              </div>
              <div className="linkLocation__icon">
                <AiOutlineRight />
              </div>
              <div>
                <a href="#">BÓC TERM</a>
              </div>
            </div>
            <div className="header__info--title">
              <h1>
                {" "}
                Quiet quitting: Xách ba lô đi, làm đủ việc, xách ba lô về
              </h1>
            </div>
            <div className="header__info--desc">
              <p>
                Từ bao giờ làm đúng những gì quy định trong mô tả công việc bị
                coi là không đủ cống hiến?
              </p>
            </div>
            <div className="header__info--authorAndButton Article__author">
              <div className="authorAndButton__left  Article__author--info">
                <div className="authorAndButton__avt avt">
                  <img src={ArticleAvt}></img>
                </div>
                <div className="authorAndButton__roleAndName">
                  <p>EDITOR</p>
                  <a className="userName">Long vũ</a>
                </div>
              </div>
              <div className="authorAndButton__right">
                <div className="authorAndButton__right--item">
                  <Button>
                    <BsHeart />
                    <span>157</span>
                  </Button>
                </div>
                <div className="authorAndButton__right--item">
                  <Button>
                    {" "}
                    <FaFacebook />
                    <span>Share</span>
                  </Button>
                </div>
                <div className="authorAndButton__right--item">
                  <Button>
                    <BiLinkAlt />
                    <span>Coppy link</span>
                  </Button>
                </div>
                <div className="authorAndButton__right--item">
                  <Button>
                    <BsBookmark />
                    <span>Bookmark</span>
                  </Button>
                </div>
                <div className="authorAndButton__right--item">
                  <Button>
                    <FaRegCommentDots />
                    <span>Bình luận</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogDetail_header--poster">
            <img src={headerBlogDetailPoster}></img>
            <p>Nguồn: Office Space</p>
          </div>
        </div>
        <div className="BlogDetail__body">
          <div className="BlogDetail_body--topic">
            <div className="topic__titleAndDesc">
              <h3>
                <GiCardRandom />
                <span>Bài viết này thuộc series Bóc Term</span>
              </h3>
              <p>Series bóc tem những từ ngữ mới đang thịnh hành cùng</p>
            </div>
            <div className="topic__followButton">
              <Button>Theo dõi</Button>
            </div>
          </div>
          <div className="BlogDetail__body--content">
            <div>
              <h2>1. Quiet quitting là gì?</h2>
              <p>
                Theo Urban Dictionary, quiet quitting là một hình thức nghỉ việc
                trong tâm trí trong đó người lao động chỉ làm đúng những việc
                được liệt kê trong mô tả công việc trong đúng thời gian được
                công ty và pháp luật quy định. Họ sẽ không làm thêm giờ, không
                tham gia những hoạt động tập thể của công ty, và cũng không trả
                lời tin nhắn công việc ngoài giờ làm.
              </p>
              <p>
                Dù việc người lao động thực hiện những điều trên là khá… bình
                thường trong các công ty, tổ chức, và quốc gia tôn trọng luật
                lao động, song nhiều tờ báo lại tỏ ra rằng đây là một xu hướng
                bất ngờ.
              </p>
              <p>
                Một số tờ báo đã lãng mạn hoá quiet quitting bằng cách cô đọng
                nó lại thành một quan điểm rằng “công việc không nên chiếm quá
                nhiều thời gian trong cuộc sống.” Một số tờ khác thì coi quiet
                quitting là một “cuộc cách mạng.”
              </p>
              <p>
                The Telegraph cảnh báo các doanh nghiệp rằng hợp đồng giữa họ và
                nhân viên đang ngày càng “dễ tổn thương” trong thời kỳ hậu đại
                dịch. Phải chăng quiet quitting cũng sẽ bùng phát thành một xu
                hướng toàn cầu như <a href="#">anti-work?</a>
              </p>
            </div>
            <div>
              <h2>2. Nguồn gốc của quiet quitting</h2>
              <p>
                Thật bất ngờ rằng quiet quitting không bắt nguồn từ một đất nước
                tư bản chủ nghĩa như Mỹ và khối Tây Âu, nơi vấn đề bóc lột lao
                động và những phong trào đấu tranh được bàn tán hàng ngày. Thay
                vào đó, phong trào này bắt nguồn từ Trung Quốc.
              </p>
              <p>
                Cụ thể, quiet quitting - vốn đang bao phủ hàng triệu video trên
                mạng xã hội TikTok - được truyền cảm hứng từ phong trào tang
                ping, hay lying flat (nằm thẳng). Tang ping bùng nổ trên các
                trang mạng xã hội Trung Quốc vào tháng 4 năm 2021 vừa như một
                lối sống, vừa như một phong trào xã hội.
              </p>
              <p>
                Tang ping tuyên bố chống lại lối sống rat race (đường đua chuột)
                mà đất nước này theo đuổi sau cuộc Cải cách kinh tế Trung Quốc,
                hay cuộc mở cửa với nền kinh tế thị trường phương Tây vào năm
                1978. Thay vào đó, nó cổ cũ việc người lao động có thể nằm thẳng
                ra và đợi cơn đau từ việc bị đánh đập qua đi, giống như những
                work zombie vậy.
              </p>
              <p>
                Xảy ra cùng thời gian với <a href="#">cuộc Đại từ chức</a> ở Mỹ
                và các nước phương Tây do hậu quả của cuộc đại dịch Covid-19,
                tang ping lan toả với tốc độ khổng lồ và nhanh chóng bị cho là
                một phong trào nguy hiểm, khi Trung Quốc và nhiều quốc gia đang
                phát triển vẫn theo đà tích luỹ tư bản nhanh chóng vì địa vị
                trong giao thương quốc tế. Phong trào bị dập tắt khi Trung Quốc
                lọc và cấm từ khoá này khỏi internet nội địa.
              </p>
              <p>
                Giờ đây, với quiet quitting đang viral trên TikTok, tinh thần
                “nằm thẳng” hồi sinh trở lại ở quy mô toàn cầu. Chỉ có điều,
                khác với nhiều phong trào đình công, vốn rồi sẽ bị đàn áp nặng
                nề, những “quiet quitters” đấu tranh bằng cách chỉ ra rằng chúng
                ta đang sống trong một môi trường lao động điên rồ nơi làm đúng
                nghĩa vụ của mình bị coi là chưa đủ cống hiến.
              </p>
            </div>
            <div>
              <h2>3. Vì sao quiet quitting phổ biến?</h2>
              <h3>Tương đồng với một số hình tượng phương Tây</h3>
              <p>
                Hình tượng người làm công chỉ làm đúng với bổn phận của họ, từ
                chối làm việc ngoài giờ, và ngắt liên lạc đối với những người có
                liên quan tới công việc vào ngoài giờ hành chính, hay được giới
                phê bình so sánh với nhân vật Bartleby trong tập truyện ngắn
                Bartleby, the Scrivener: A Story of Wall Street của nhà văn
                Herman Melville.
              </p>
              <p>
                Truyện ngắn được sáng tác vào giữa thế kỷ 19 này kể về một luật
                sư ở Phố Wall thuê một người thư ký tên là Bartleby. Sau một
                thời gian làm việc chăm chỉ, anh ta dần từ chối những công việc
                được giao thêm bằng câu nói nổi tiếng, “I would prefer not to”
                (tạm dịch: Tôi không muốn). Câu nói này được sử dụng lại nhiều
                lần như một châm ngôn của nhà triết học theo chủ nghĩa cộng sản
                Slavoj Zizek.
              </p>
              <h3>Mức độ hài lòng trong công việc đang lao dốc</h3>
              <p>
                Đó là cảnh báo được đưa ra bởi công ty tư vấn và phân tích
                Gallup trong báo cáo Tình trạng Môi trường lao động Toàn cầu năm
                2022. Một số chỉ báo đáng chú ý bao gồm:
              </p>
              <ul>
                <li>
                  <p>
                    Sự tham gia và phúc lợi toàn cầu tạm ổn định, nhưng thấp.
                    Trong năm nay, chỉ 21% trong số nguồn nhân lực thế giới còn
                    tham gia vào công việc và 33% cảm thấy hạnh phúc với công
                    việc, số còn lại chỉ nhìn đồng hồ đợi giờ về và thấy việc
                    làm của họ hoàn toàn vô nghĩa.
                  </p>
                </li>
                <li>
                  <p>
                    Mức độ stress trong công việc giữa người lao động trên toàn
                    thế giới đã cao kỷ lục với 44% số nhân sự cảm thấy không lối
                    thoát trong áp lực công việc. Vào năm 2014, con số này là
                    33%.
                  </p>
                </li>
                <li>
                  <p>
                    Chỉ số phúc lợi ở châu Âu và Đông Á giảm mạnh sau đại dịch,
                    trong đó Đông Á có chỉ số này thấp nhất thế giới.
                  </p>
                </li>
                <li>
                  <p>
                    Sau đại dịch, chỉ có thị trường lao động ở Bắc Mỹ hồi phục.
                    Đông Á tiếp tục là nơi có cơ hội việc làm thấp nhất.
                  </p>
                </li>
              </ul>
              <h3>Lo ngại về độ trong lành của môi trường lao động</h3>
              <p>
                Nhiều nhà phân tích lo ngại rằng phong trào quiet quitting lên
                ngôi có nghĩa là trong nhiều năm trở lại đây, hustle culture
                (văn hoá hối hả) đã độc chiếm các diễn ngôn về môi trường làm
                việc toàn cầu. Khi mọi công ty đều hối thúc nhân sự của mình làm
                việc chăm chỉ hơn, với thời gian làm việc dài hơn, năng suất lao
                động cao hơn, và lương theo giờ thấp hơn, chúng ta đang quay lại
                chủ nghĩa tư bản thế kỷ 19.
              </p>
              <p>
                Những điều này đã bị quên đi: Ở hầu hết các quốc gia trên thế
                giới, luật lao động đã quy định cụ thể về thù lao cho làm thêm
                giờ; nếu hợp đồng lao động không quy định cụ thể điều khoản này,
                người làm hoàn toàn có thể thực hiện những nước đi pháp lý để
                đòi quyền lợi.
              </p>
              <p>
                Ở Việt Nam, Điều 97 Bộ luật lao động 2012 cũng quy định nếu bạn
                được yêu cầu làm thêm giờ, làm đêm hoặc làm việc vào ngày nghỉ,
                tiền lương thêm giờ được tính bằng tiền lương theo công việc
                đang làm nhân với ít nhất 150% cho đến 300%. Mức phạt nếu trả
                dưới mức quy định cũng đã được pháp luật làm rõ.
              </p>
            </div>
            <div className="part4">
              <h2>4. Dùng quiet quitting như thế nào?</h2>
              <strong>
                <em>Tiếng Anh:</em>
              </strong>
              <p>
                A: Work harder! The revenue of our company is decreasing due to
                the quiet quitting movement!
              </p>
              <p>B: I would prefer not to.</p>
              <strong>
                <em>Tiếng Việt:</em>
              </strong>
              <p>
                A: Chăm làm lên, trong công ty này đã có quá nhiều người bỏ việc
                trong im lặng, doanh thu tháng này không biết đi đâu về đâu!
              </p>
              <p>B: Tôi không muốn.</p>
            </div>
          </div>
          <div className="BlogDetail__body--linkAndTag">
            <div className="links">
              <a>
                <span>
                  {">>"} Work zombie - Bạn có đang nghỉ việc trong tư tưởng?
                </span>
              </a>
              <a>
                <span>
                  {">>"} Bóc term: Rat Race - Một cuộc đua không dừng lại
                </span>
              </a>
              <a>
                <span>
                  {">>"} Đình công tập thể: Khi có công việc không phải là đặc
                  ân
                </span>
              </a>
            </div>

            <div className="tags">
              <span className="tags__item">
                <a href="#">#Kỷ luật</a>
              </span>
              <span className="tags__item">
                <a href="#">#Môi trường làm việc</a>
              </span>
              <span className="tags__item">
                <a href="#">#Term</a>
              </span>
            </div>
          </div>
          <div className="BlogDetail__body--formSignUp">
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
                      5 tin tức bạn cần biết mỗi tuần Mỗi thứ Tư, bạn sẽ nhận
                      được email tổng hợp những tin tức nổi bật tuần qua một
                      cách súc tích, dễ hiểu, và hoàn toàn miễn phí!
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
          </div>
        </div>
        <div className="BlogDetail__footer">
          <div className="BlogDetail__footer--hotBlog">
            <div className="hotBlog__header">
              <h2>
                MỌI NGƯỜI<br></br> ĐỀU ĐỌC
              </h2>
            </div>
            <div className="hotBlog__body">
              {listIndex.map((index) => {
                return (
                  <VerticalPodcast
                    index={index}
                    img={VerticalPodcastImg}
                    topic="ĐIỆN ẢNH"
                    title="Những người đàn bà rơi lệ vì tình trong phim của Vương Gia Vệ"
                  />
                );
              })}
            </div>
          </div>
          <div className="BlogDetail__footer--specialBlog">
            <div className="specialBlog__header">
              <h2>
                BÓC<br></br>TERM
              </h2>
            </div>
            <div className="specialBlog__body">
              <Row className="specialBlog__body--row">
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
              </Row>
              {/* <Row className="specialBlog__body--row">
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <MainPodcast
                    background={MainPodcastBg}
                    contentField="Bít tắt"
                    dateTime="2 ngày trước"
                    contentTitle="Bít Tất #173: Cha mẹ độc hại"
                  />
                </Col>
              </Row> */}
            </div>
            <div className="specialBlog__button">
              <div className="homepage__section7--button">
                <Button>
                  <span>XEM TẤT CẢ</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="BlogDetail__footer--newBlog">
            <div className="newBlog__left">
              <div className="newBlog__left--title">
                <h2>
                  Bài <br></br> MỚI
                </h2>
              </div>
              <div className="newBlog__left--content">
                <VerticalAritcleMain
                  image={ArticleImg}
                  avt={ArticleAvt}
                  topic="Thương"
                  title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                  userName="Long Vũ"
                  timePost="21 giờ trước"
                />
                <VerticalAritcleMain
                  image={ArticleImg}
                  avt={ArticleAvt}
                  topic="Thương"
                  title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                  userName="Long Vũ"
                  timePost="21 giờ trước"
                />
                <VerticalAritcleMain
                  image={ArticleImg}
                  avt={ArticleAvt}
                  topic="Thương"
                  title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                  userName="Long Vũ"
                  timePost="21 giờ trước"
                />
                <VerticalAritcleMain
                  image={ArticleImg}
                  avt={ArticleAvt}
                  topic="Thương"
                  title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                  userName="Long Vũ"
                  timePost="21 giờ trước"
                />
                <VerticalAritcleMain
                  image={ArticleImg}
                  avt={ArticleAvt}
                  topic="Thương"
                  title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                  userName="Long Vũ"
                  timePost="21 giờ trước"
                />
                <VerticalAritcleMain
                  image={ArticleImg}
                  avt={ArticleAvt}
                  topic="Thương"
                  title="Cởi Mở: Tôi là “gynosexual” - tôi yêu tính nữ"
                  userName="Long Vũ"
                  timePost="21 giờ trước"
                />
              </div>
              <div className="newBlog__left--button">
                <Button>
                  <span>XEM THÊM</span>
                </Button>
              </div>
            </div>
            <div className="newBlog__right">
              <img src={AdvBlogDetail}></img>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetail;
