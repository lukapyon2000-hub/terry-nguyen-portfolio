import React from 'react';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface SampleContent {
  title: string;
  tag: string;
  excerpt: string;
}

export interface RoadmapStep {
  week: string;
  title: string;
  tasks: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  role?: string;
  scale?: string;
  partners?: string[];
  metrics?: ProjectMetric[];
  fullStory?: string;
  challenge?: string;
  approach?: string;
  outcomes?: string[];
  sampleContent?: SampleContent[];
  roadmap?: RoadmapStep[];
  isSpeculative?: boolean;
}

export interface AcademicProject {
  id: string;
  number: string;
  title: string;
  role: string;
  problem: string;
  solution: string;
  contribution: string;
  skillsDeveloped: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "NGUYỄN ĐÌNH ĐÌNH",
  title: "Techcombank Campus Ambassador 2026 Candidate",
  tagline: "Building meaningful partnerships to create impactful student experiences.",
  university: "Trường Đại học Luật TP.HCM (HCMC University of Law - UHL)",
  program: "Chương trình Chất lượng cao Luật Thương mại - Dân sự - Quốc tế (Khoá 48)",
  gpa: "3.5 / 4.0",
  academicYear: "Sinh viên Năm 2",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "nguyendinhdinh72@gmail.com",
  phone: "+84 937 893 143",
  bioHeadline: "Sinh viên Luật đam mê Kết nối Doanh nghiệp, Vận động Tài trợ & Truyền thông Đối ngoại.",
  bioSubhead: "Sinh viên năm 2 khoa Luật Thương mại - Dân sự - Quốc tế, UHL. Đam mê kết nối doanh nghiệp, tổ chức sự kiện phong trào và truyền thông đối ngoại.",
  bioParagraphs: [
    "Tôi là Nguyễn Đình Đình, sinh viên năm 2 Chương trình Chất lượng cao ngành Luật Thương mại - Dân sự - Quốc tế tại Trường Đại học Luật TP.HCM với điểm trung bình học tập GPA 3.5/4.0.",
    "Là Cán bộ Phụ trách Chuyên môn & Tài trợ thuộc Ban Phong trào - Ban Đối ngoại Đoàn - Hội UHL, tôi chuyên trách công tác xây dựng hồ sơ vận động tài trợ (proposal), chủ động tìm kiếm tiếp cận doanh nghiệp, thương lượng đàm phán hợp đồng tài trợ và đối soát quyền lợi tại thực địa cho các chuỗi sự kiện sinh viên quy mô lớn từ 500 đến 1,600+ người.",
    "Bên cạnh hoạt động phong trào, tôi giữ vai trò Trưởng nhóm các đề tài Nghiên cứu Khoa học sinh viên về 'Rủi ro Pháp lý trong Hợp đồng Điện tử' và 'Ngôn ngữ cơ thể trong Nghề Luật', kết hợp giữa tư duy phân tích pháp lý hệ thống và kỹ năng điều phối nhóm thực tế."
  ],
  awards: [
    "Danh hiệu 'Sinh viên 5 tốt' cấp Khoa & cấp Trường (ĐH Luật TP.HCM)",
    "Tuyên dương 'Thanh niên tiên tiến làm theo lời Bác'",
    "Giấy khen của Hiệu trưởng Trường Đại học Luật TP.HCM dành cho Tập thể Ban Đối Ngoại xuất sắc năm học 2023 - 2024"
  ],
  coreSkills: [
    "External Relations & Corporate Outreach",
    "Sponsorship Proposal Drafting & Negotiation",
    "On-site Event Operations & Risk Management",
    "Legal Research & Analysis (GPA 3.5/4.0)",
    "Stakeholder & Partner Benefits Verification"
  ],
  softSkills: [
    "Team Leadership & Coordination",
    "Problem Solving under Pressure",
    "Professional Communication",
    "Time Management & Detail Orientation",
    "Adaptability & Growth Mindset"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "event-01-traditional-camp-50yrs",
    number: "01",
    title: "Hội Trại Truyền Thống Kỷ Niệm 50 Năm UHL",
    subtitle: "Vận động Tài trợ Doanh nghiệp & Vận hành Sự kiện Quy mô 1,600+ Sinh viên",
    category: "SIGNATURE EVENT & SPONSORSHIP",
    description: "Sự kiện trọng điểm kỷ niệm 50 năm truyền thống Trường Đại học Luật TP.HCM. Nguyễn Đình Đình giữ vai trò Cán bộ Phụ trách Chuyên môn & Tài trợ Ban Phong trào - Ban Đối Ngoại.",
    tags: ["External Relations", "Sponsorship Proposal", "Sponsor Benefits", "1,600+ Attendees"],
    role: "Cán bộ Phụ trách Chuyên môn & Tài trợ - Ban Phong trào (Ban Đối Ngoại Đoàn - Hội UHL)",
    scale: "1,600+ Sinh viên tham dự trực tiếp",
    partners: ["Novotane", "Mặt Trời Hiện Đại", "Trung tâm Anh ngữ AZ", "Sài Gòn Food"],
    metrics: [
      { label: "Quy mô tham dự", value: "1,600+" },
      { label: "Doanh nghiệp đồng hành", value: "4+ Đơn vị" },
      { label: "Tỷ lệ hoàn thành quyền lợi", value: "100%" }
    ],
    fullStory: "Nhân dịp Kỷ niệm 50 năm truyền thống UHL, Hội trại Truyền thống là sự kiện quy mô nhất năm. Với vai trò Phụ trách Chuyên môn & Tài trợ, Đình Đình đã trực tiếp biên soạn Hồ sơ Mời Tài trợ (Sponsorship Proposal), tìm kiếm tiếp cận và đàm phán hợp đồng với các nhãn hàng Novotane, Mặt Trời Hiện Đại, Anh ngữ AZ...",
    challenge: "Đảm bảo cân bằng giữa quyền lợi thương hiệu của Nhà tài trợ và quy định nghiêm ngặt của Môi trường Đại học, đồng thời quản lý rủi ro hiện trường với số lượng trại sinh hơn 1,600 người.",
    approach: "Xây dựng khung quyền lợi linh hoạt: kết hợp đặt gian hàng trải nghiệm (Booths), lồng ghép thương hiệu vào ấn phẩm POSM, check-in nhận quà và tổ chức trò chơi tương tác thu hút sinh viên.",
    outcomes: [
      "Vận động thành công nguồn tài trợ tài chính & hiện vật từ 4+ doanh nghiệp lớn.",
      "Thực hiện đối soát và nghiệm thu 100% cam kết quyền lợi Nhà tài trợ.",
      "Góp phần giúp Ban Đối Ngoại nhận Giấy khen của Hiệu trưởng UHL năm học 2023 - 2024."
    ],
    sampleContent: [
      {
        title: "Sponsorship Proposal & Offerings Matrix",
        tag: "Proposal Document",
        excerpt: "Bộ Hồ sơ Vận động Tài trợ chi tiết gồm Khung Quyền lợi Vàng/Bạc/Đồng, Ma trận phủ sóng truyền thông và Kế hoạch kích hoạt thương hiệu tại Hội trại."
      },
      {
        title: "Sponsor Benefit Verification Checklist",
        tag: "On-site SOP",
        excerpt: "Bảng đối soát chi tiết từng hạng mục đặt POSM, logo banner, quà tặng check-in và timeline gian hàng trải nghiệm thực địa."
      }
    ]
  },
  {
    id: "event-02-[#23]-cultural-festival",
    number: "02",
    title: "Sự Kiện Văn Hóa 'Gấm Vóc Non Sông' 2024",
    subtitle: "Chuỗi Hoạt động Văn hóa & Kết nối 500+ Sinh viên UHL",
    category: "CULTURAL EVENT & EXTERNAL RELATIONS",
    description: "Sự kiện văn hóa truyền thống quy mô lớn dành cho sinh viên Đại học Luật TP.HCM nhằm tôn vinh nét đẹp văn hóa dân tộc.",
    tags: ["Cultural Event", "Sponsorship Execution", "Booths Activation", "Media Reach"],
    role: "Cán bộ Vận động Tài trợ & Điều phối Thực địa",
    scale: "500+ Sinh viên tham dự",
    partners: ["Yeah1 Network", "Hada Labo", "Nước khoáng LaVie"],
    metrics: [
      { label: "Sinh viên tham gia", value: "500+" },
      { label: "Đối tác tài trợ", value: "3+ Thương hiệu" },
      { label: "Lượt tương tác truyền thông", value: "12,000+" }
    ],
    fullStory: "Chương trình 'Gấm Vóc Non Sông' tạo không gian giao lưu văn hóa trải nghiệm cho sinh viên Luật. Đình Đình tham gia xây dựng kế hoạch tiếp cận doanh nghiệp truyền thông và làm đẹp, mang đến trải nghiệm thực tế sinh động.",
    challenge: "Thiết kế các gói tài trợ hấp dẫn cho các thương hiệu ngành làm đẹp & truyền thông trong một sự kiện mang màu sắc văn hóa truyền thống.",
    approach: "Xây dựng khu vực trải nghiệm gian hàng 'Gấm Vóc' nơi sinh viên vừa trải nghiệm trò chơi dân gian vừa dùng thử sản phẩm của Nhà tài trợ.",
    outcomes: [
      "Kết nối Yeah1 và Hada Labo đồng hành tài trợ trải nghiệm cho sinh viên.",
      "Tạo không gian check-in văn hóa thu hút hơn 12,000 lượt xem trên mạng xã hội."
    ]
  },
  {
    id: "speculative-03-techcombank-ambassador",
    number: "03",
    title: "Đề Án 'Unlock Your Career Path'",
    subtitle: "Techcombank Campus Ambassador 2026 Proposal for HCMC University of Law",
    category: "CAMPUS AMBASSADOR PROPOSAL",
    description: "Đề án chiến lược truyền thông thương hiệu tuyển dụng Techcombank và kết nối cơ hội nghề nghiệp ngành Ngân hàng dành riêng cho sinh viên Luật UHL.",
    tags: ["Campus Ambassador", "Employer Branding", "Career Orientation", "Techcombank Future Gen"],
    role: "Techcombank Campus Ambassador Candidate (Nguyễn Đình Đình)",
    isSpeculative: true,
    metrics: [
      { label: "Lượt tiếp cận truyền thông", value: "4,500+" },
      { label: "Tham gia thử thách 3 phút", value: "600+" },
      { label: "Ứng tuyển Future Gen", value: "100+" }
    ],
    fullStory: "Sinh viên Luật thường nghĩ đến định hướng Luật sư hay Pháp chế doanh nghiệp thuần túy. Qua quan sát, Đình Đình nhận thấy khoảng cách không nằm ở năng lực sinh viên mà ở điểm chạm thông tin. Đề án đề xuất 3 giải pháp trọng tâm: Q&A đa nền tảng, Kênh kết nối chính thức Đoàn - Hội UHL & Techcombank, và Trải nghiệm ứng tuyển nhập vai.",
    roadmap: [
      {
        week: "TUẦN 1",
        title: "Liên hệ phối hợp & Thiết lập Cổng thông tin",
        tasks: [
          "Mở cổng kết nối: Chủ động làm việc với Đoàn - Hội trường ĐH Luật TP.HCM",
          "Trình duyệt hồ sơ: Chuyển giao thư mời, công văn & timeline sơ bộ",
          "Khảo sát thực địa: Thống nhất vị trí gian hàng và luồng di chuyển"
        ]
      },
      {
        week: "TUẦN 2",
        title: "Sản xuất tư liệu & Phát sóng truyền thông",
        tasks: [
          "Sản xuất nội dung: Dựng chuỗi video giải đáp Q&A về môi trường Ngân hàng",
          "Tài liệu độc quyền: Biên tập cẩm nang 'Bí kíp Tech Banker' dành cho Luật sinh",
          "Hệ thống Online: Tích hợp tài liệu vào cổng mã QR đặc quyền"
        ]
      },
      {
        week: "TUẦN 3",
        title: "Hoàn thiện nội dung & Chuẩn bị vận hành",
        tasks: [
          "Test kỹ thuật: Chạy thử bài trắc nghiệm xử lý tình huống trực tuyến",
          "Đối soát tiến độ: Kiểm tra chéo với Mentor từ Techcombank",
          "Vật phẩm POSM: Tiếp nhận và phân bổ quà tặng tại thực địa"
        ]
      },
      {
        week: "NGÀY HỘI VIỆC LÀM",
        title: "Thực thi sự kiện & Chuyển đổi ứng viên",
        tasks: [
          "Nhập vai thực tế: Hướng dẫn sinh viên quét mã, xử lý khủng hoảng 3 phút",
          "Tư vấn 1:1: Giải đáp thắc mắc và trao quà tặng tại gian hàng",
          "Chuyển đổi: Hướng dẫn nộp CV trực tiếp vào chương trình Future Gen"
        ]
      }
    ]
  }
];

export const CLINIC_PROJECT = {
  title: "Đề Án 'Unlock Your Career Path' - Techcombank",
  tagline: "Connecting Law Students to Financial Career Opportunities",
  description: "Đề án truyền thông thương hiệu tuyển dụng Techcombank và kết nối cơ hội nghề nghiệp dành cho sinh viên Trường Đại học Luật TP.HCM.",
  audience: "10,000+ Sinh viên ĐH Luật TP.HCM & Khối ngành Kinh tế - Luật",
  platforms: ["UHL Law Student Network", "Techcombank Talent Careers", "TikTok & LinkedIn"],
  pillars: [
    { name: "Bridge The Knowledge Gap", desc: "Giải đáp góc nhìn nghề nghiệp ngành Ngân hàng cho sinh viên Luật" },
    { name: "Interactive Roleplay", desc: "Thử thách 'Xử lý khủng hoảng 3 phút' mô phỏng môi trường làm việc" },
    { name: "Direct Application", desc: "Hướng dẫn nộp hồ sơ chương trình Techcombank Future Gen" }
  ],
  stats: [
    { label: "Target Reach", value: "4,500+" },
    { label: "Interactive Roleplay", value: "600+" },
    { label: "Future Gen CVs", value: "100+" }
  ]
};

export const CASE_STUDY_STEPS = [
  {
    number: "01",
    title: "Insight & Need Analysis",
    subtitle: "Khảo sát nhu cầu thực tế sinh viên & Doanh nghiệp",
    description: "Lắng nghe tâm tư nhu cầu thực tế của sinh viên Luật UHL và nắm bắt thông điệp tuyển dụng, văn hóa doanh nghiệp của Ngân hàng Techcombank.",
    keyPoints: [
      "Khảo sát góc nhìn định hướng nghề nghiệp sinh viên Luật",
      "Phân tích thông điệp thương hiệu tuyển dụng Techcombank Future Gen",
      "Xác định khoảng cách thông tin và điểm chạm hiệu quả"
    ]
  },
  {
    number: "02",
    title: "Proposal & Strategic Concept",
    subtitle: "Biên soạn Hồ sơ & Thông điệp sáng tạo",
    description: "Xây dựng đề án tổng thể 'Unlock Your Career Path', biên soạn hồ sơ mời tài trợ (Proposal) chuẩn mực và ma trận phủ sóng truyền thông.",
    keyPoints: [
      "Xây dựng thông điệp chủ đạo kết nối hai bên",
      "Lập ma trận quyền lợi đối ngoại & ngân sách sự kiện",
      "Hoàn thiện bộ nhận diện truyền thông POSM"
    ]
  },
  {
    number: "03",
    title: "Corporate Negotiation & Legal Review",
    subtitle: "Đàm phán tài trợ & Thẩm định văn bản pháp lý",
    description: "Trực tiếp tiếp cận thương lượng với đối tác doanh nghiệp, rà soát hợp đồng tài trợ và đảm bảo hành lang pháp lý an toàn.",
    keyPoints: [
      "Thương lượng chi tiết cam kết quyền lợi hai bên",
      "Soạn thảo hợp đồng tài trợ và biên bản ghi nhớ (MOU)",
      "Bảo mật thông tin và tuân thủ quy chế Nhà trường"
    ]
  },
  {
    number: "04",
    title: "On-site Activation & Operation",
    subtitle: "Vận hành gian hàng & Quản trị rủi ro thực địa",
    description: "Điều phối nhân sự, triển khai không gian trải nghiệm 'Xử lý khủng hoảng 3 phút', đón tiếp đại diện doanh nghiệp và quản trị rủi ro.",
    keyPoints: [
      "Lắp đặt booth trải nghiệm và điều phối luồng di chuyển",
      "Hỗ trợ sinh viên nhập vai tương tác xử lý tình huống",
      "Xử lý phát sinh thời gian thực tại hiện trường"
    ]
  },
  {
    number: "05",
    title: "Benefits Verification & Post-Event Report",
    subtitle: "Đối soát quyền lợi & Báo cáo tổng kết",
    description: "Thực hiện kiểm tra đối soát 100% cam kết truyền thông, tổng hợp số liệu đo lường và gửi báo cáo tri ân đối tác.",
    keyPoints: [
      "Nghiệm thu hình ảnh POSM và lượt tương tác truyền thông",
      "Lập báo cáo tổng kết (Post-Event Report) chuyên nghiệp",
      "Duy trì mối quan hệ đối tác chiến lược lâu dài"
    ]
  }
];

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "e-contracts-digital-security",
    number: "04-A",
    title: "Rủi ro Pháp lý & Bảo mật trong Giao kết Hợp đồng Điện tử",
    role: "Trưởng nhóm Nghiên cứu Khoa học",
    problem: "Sự bùng nổ của chuyển đổi số và thương mại điện tử làm phát sinh nhiều lỗ hổng, rủi ro pháp lý trong việc xác thực, bảo mật thông tin và giải quyết tranh chấp hợp đồng điện tử.",
    solution: "Dẫn dắt nhóm nghiên cứu hệ thống quy định pháp luật hiện hành, phân tích thực trạng rủi ro và đề xuất các giải pháp nhằm hoàn thiện khung pháp lý trong bối cảnh số hóa.",
    contribution: "Xây dựng kế hoạch nghiên cứu, phân chia nhiệm vụ, điều phối phân tích tài liệu pháp lý và tổng hợp báo cáo kết quả hệ thống.",
    skillsDeveloped: ["Legal Research", "Analytical Thinking", "Project Planning", "Team Leadership"]
  },
  {
    id: "body-language-for-lawyers",
    number: "04-B",
    title: "Body Language for Lawyers — Ngôn ngữ cơ thể trong Nghề Luật",
    role: "Trưởng nhóm Đề tài Học thuật",
    problem: "Trong lĩnh vực Luật, khả năng thuyết phục không chỉ đến từ kiến thức pháp lý mà còn phụ thuộc vào cách giao tiếp và xây dựng niềm tin. Yếu tố phi ngôn ngữ chưa được khai thác hiệu quả.",
    solution: "Dẫn dắt nhóm nghiên cứu vai trò của ngôn ngữ cơ thể, xây dựng bộ công cụ giao tiếp phi ngôn ngữ ứng dụng trong giao tiếp với khách hàng và môi trường pháp lý.",
    contribution: "Nghiên cứu nội dung chuyên đề, xây dựng timeline, điều phối làm việc nhóm và hoàn thiện sản phẩm trình bày.",
    skillsDeveloped: ["Communication", "Stakeholder Coordination", "Adaptability", "Problem Solving"]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "uhl-ban-doi-ngoai",
    role: "Cán bộ Phụ trách Chuyên môn & Tài trợ Ban Phong trào",
    organization: "Ban Đối Ngoại Đoàn - Hội Trường Đại học Luật TP.HCM",
    period: "Tháng 10/2023 — Hiện tại",
    location: "TP. Hồ Chí Minh",
    description: "Trực tiếp phụ trách công tác đối ngoại, lập proposal, vận động tài trợ doanh nghiệp và vận hành tổ chức các sự kiện quy mô lớn tại Đại học Luật TP.HCM.",
    responsibilities: [
      "Lập Hồ sơ Vận động Tài trợ (Sponsorship Proposal) cho các chuỗi chương trình trọng điểm của Nhà trường và Đoàn - Hội.",
      "Chủ động tìm kiếm, tiếp cận và trực tiếp thương lượng đàm phán hợp đồng tài trợ với 7+ doanh nghiệp tên tuổi (Novotane, Yeah1, Hada Labo, AZ...).",
      "Quản lý, điều phối và đối soát 100% cam kết quyền lợi Nhà tài trợ tại thực địa trong các sự kiện từ 500 đến 1,600+ sinh viên.",
      "Xây dựng và hoàn thiện hệ thống văn bản đối ngoại chuyên nghiệp: thư mời, công văn, hợp đồng tài trợ và biên bản nghiệm thu."
    ],
    achievements: [
      "Huy động tài trợ thành công cho Hội trại Truyền thống 50 năm UHL (1,600+ người) và Lễ hội 'Gấm Vóc Non Sông' (500+ người).",
      "Tập thể Ban Đối Ngoại vinh dự nhận Giấy khen của Hiệu trưởng UHL năm học 2023 - 2024."
    ]
  },
  {
    id: "techcombank-ambassador-candidate",
    role: "Techcombank Campus Ambassador 2026 Candidate",
    organization: "Ngân hàng TMCP Kỹ Thương Việt Nam (Techcombank)",
    period: "2026",
    location: "TP. Hồ Chí Minh",
    description: "Đại diện ứng tuyển Chương trình Đại sứ Sinh viên Techcombank 2026 với đề án chiến lược kết nối sinh viên Luật UHL.",
    responsibilities: [
      "Xây dựng Đề án 'Unlock Your Career Path' nâng cao nhận diện thương hiệu tuyển dụng Techcombank tại UHL.",
      "Lên kế hoạch tổ chức gian hàng trải nghiệm nhập vai 'Xử lý khủng hoảng 3 phút' dành cho Luật sinh.",
      "Truyền thông định hướng nghề nghiệp và hướng dẫn sinh viên ứng tuyển chương trình Techcombank Future Gen."
    ],
    achievements: [
      "Đề án nhận được sự đánh giá cao về tính khả thi, sự am hiểu sâu sắc tâm lý sinh viên Luật và tính sáng tạo trong cách tiếp cận."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "EXTERNAL RELATIONS",
    description: "Xây dựng và phát triển mối quan hệ hợp tác tài trợ doanh nghiệp bền vững.",
    skills: [
      "Sponsorship Development",
      "Corporate Outreach",
      "Partnership Negotiation",
      "Proposal & Contract Drafting",
      "Sponsor Benefits Activation"
    ]
  },
  {
    title: "EVENT & PLANNING",
    description: "Tổ chức và vận hành các sự kiện phong trào quy mô lớn chuyên nghiệp.",
    skills: [
      "Master Plan & Timeline Setup",
      "Multi-party Coordination",
      "POSM & On-site Activation",
      "Risk Control & Timeline Tracking",
      "Reporting & Evaluation"
    ]
  },
  {
    title: "LEGAL & RESEARCH",
    description: "Tư duy phân tích pháp lý, cẩn trọng và có hệ thống.",
    skills: [
      "Legal Research & Analysis",
      "Commercial & E-Commerce Law",
      "Contract Review & Drafting",
      "Analytical Problem Solving",
      "Document Precision"
    ]
  },
  {
    title: "COMMUNICATION & LEADERSHIP",
    description: "Truyền thông kết nối, dẫn dắt đội nhóm và điều phối các bên.",
    skills: [
      "Business Communication",
      "Team Leadership & Mentoring",
      "Stakeholder Management",
      "Adaptability & High Responsibility",
      "Public Presentation"
    ]
  }
];

export const WHY_TECHCOMBANK = {
  title: "WHY TECHCOMBANK? WHY CHOOSE ĐÌNH ĐÌNH?",
  quote: "A SHARED VISION, NOT JUST A WELL-KNOWN BRAND",
  mainParagraph: "Điều khiến em chọn Techcombank Campus Ambassador không chỉ vì đây là một thương hiệu lớn, mà quan trọng hơn, em thấy mình có cùng tinh thần với chương trình. Em tin mỗi người trẻ đều có một cách tạo ra giá trị riêng, và em cũng đang trên hành trình tìm kiếm câu trả lời của mình.",
  storyParagraph: "Là sinh viên Luật, trước đây em cũng chỉ nghĩ đến những lối đi quen thuộc như làm luật sư hay pháp chế doanh nghiệp. Nhưng bước ngoặt đến khi em tham gia Ban Phong trào với vai trò Phụ trách Đối ngoại. Em có cơ hội làm việc trực tiếp với doanh nghiệp, tự tay chuẩn bị proposal, đàm phán tài trợ, đối soát quyền lợi và điều phối nhiều chương trình lớn. Chính những trải nghiệm thực địa đó giúp em nhận ra mình thực sự thích và làm tốt vai trò kết nối giữa doanh nghiệp và sinh viên.",
  valueCallout: "Vì vậy, đến với Techcombank, em muốn tiếp tục làm tốt nhất điều mình đang làm: lắng nghe xem sinh viên trường em cần gì, hiểu ngân hàng muốn gì để kết nối hai bên bằng những hoạt động thực tế nhất. Với em, đó chính là cách em lan tỏa giá trị của Techcombank bằng đúng tiếng nói và trải nghiệm thực chất của một sinh viên Luật."
};
