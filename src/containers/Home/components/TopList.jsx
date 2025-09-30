import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../../../components/ui/List';
import EmptyState from '../../../components/feedback/EmptyState';
import { homeService } from '../services/homeService';

const TopList = ({ apiUrl, title: defaultTitle }) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState(defaultTitle || '');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      if (!apiUrl) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await homeService.getRanking(apiUrl);
        if (mounted) {
          setTitle(response.data.title || defaultTitle);
          setBooks(Array.isArray(response.data.books) ? response.data.books : []);
        }
      } catch (err) {
        if (mounted) {
          setError('Không thể tải dữ liệu bảng xếp hạng.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [apiUrl, defaultTitle]);

  if (loading) {
    return <div className="text-center p-4">Đang tải...</div>;
  }

  if (error) {
    return <EmptyState message={error} />;
  }

  return <List context = "topList" variant="rank" title={title} items={books} />;
};

TopList.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default TopList;