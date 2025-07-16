import React from 'react';
import { Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                PHÚC VINH EDUCATION
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div>
                  <p className="text-sm text-gray-300">HOTLINE 08H - 20H (MIỄN PHÍ)</p>
                  <p className="text-lg font-semibold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                    1900.1234
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
                <div>
                  <p className="text-sm text-gray-300">TƯ VẤN KHÓA HỌC DOANH NGHIỆP</p>
                  <p className="text-lg font-semibold text-teal-400 hover:text-teal-300 cursor-pointer transition-colors">
                    0987.654.321
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              CHÍNH SÁCH
            </h3>
            <ul className="space-y-2">
              {[
                'Chính sách học phí',
                'Chính sách hoàn học phí',
                'Chính sách bảo mật thông tin',
                'Chính sách chất lượng đào tạo'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400 border-b border-teal-400/30 pb-2">
              HỖ TRỢ HỌC VIÊN
            </h3>
            <ul className="space-y-2">
              {[
                'Hướng dẫn đăng ký khóa học',
                'Phương thức thanh toán',
                'Hướng dẫn sử dụng hệ thống',
                'Tư vấn chọn khóa học',
                'Tài liệu miễn phí'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              VỀ PHÚC VINH EDUCATION
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                'Giới thiệu về Phúc Vinh',
                'Sứ mệnh & tầm nhìn',
                'Tuyển dụng giảng viên'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-sm font-semibold text-teal-400 mb-3">Kết nối với Phúc Vinh</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/20' },
                  { icon: Instagram, color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/20' },
                  { icon: MessageCircle, color: 'hover:text-green-500', bg: 'hover:bg-green-500/20' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} ${social.bg} hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p className="mb-1">© 2025 PHÚC VINH EDUCATION</p>
              <p className="text-xs">
                Mã số doanh nghiệp: 0123456789 do sở KH & ĐT TP.HCM cấp, Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh, Việt Nam.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-gray-400">Đã đăng ký BCT</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🛡️</span>
                </div>
                <span className="text-sm text-gray-400">DMCA Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}

    </footer>
  );
};

export default Footer;
