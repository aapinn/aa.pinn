import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Ganti judul berdasarkan path
    switch (location.pathname) {
      case '/':
        document.title = 'Arif Rahman - Personal Website';
        break;
      case '/about':
        document.title = 'About - Arif Site';
        break;
      case '/blog':
        document.title = 'Blog - Arif Site';
        break;
      case '/projects':
        document.title = 'Projects - Arif Site';
        break;
      case '/roadmap':
        document.title = 'Roadmap - Arif Site';
        break;
      case '/dashboard':``
        document.title = 'Dashboard - Arif Site';
        break;
      case '/services':
        document.title = 'Services - Arif Site';
        break;
      case '/contact':
        document.title = 'Contact Us - Arif Site';
        break;
      case '/latestArticle/CatatanBelanja':
        document.title = 'Catatan Belanja - Arif Site';
        break;
      case '/latestArticle/PortfolioV2':
        document.title = 'Portfolio V2 - Arif Site';
        break;
      default:
        document.title = 'Page Not Found - Arif Site';
        break;
    }
  }, [location]);

  return null; // Komponen ini tidak perlu merender apapun
};

export default DynamicTitle;
