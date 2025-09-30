import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../../../components/ui/List';
import EmptyState from '../../../components/feedback/EmptyState';
import { homeService } from '../services/homeService';

const DiscussionList = ({ apiUrl }) => {
  const [discussions, setDiscussions] = useState([]);
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
        const response = await homeService.getDiscussions(apiUrl);
        if (mounted) {
          setDiscussions(Array.isArray(response.data.discussions) ? response.data.discussions.slice(0, 12) : []);
        }
      } catch (err) {
        if (mounted) {
          setError('Không thể tải dữ liệu thảo luận.');
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
  }, [apiUrl]);

  if (loading) {
    return <div className="text-center p-4">Đang tải...</div>;
  }

  if (error) {
    return <EmptyState message={error} />;
  }

  return <List context="discussions" items={discussions} />;
};

DiscussionList.propTypes = {
  apiUrl: PropTypes.string.isRequired
};

export default DiscussionList;