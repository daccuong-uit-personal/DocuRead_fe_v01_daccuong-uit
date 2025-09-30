import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../../../components/ui/List';
import EmptyState from '../../../components/feedback/EmptyState';
import { homeService } from '../services/homeService';

export default function QAList({ apiUrl }) {
  const [qas, setQAs] = useState([]);
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
        const response = await homeService.getQAs(apiUrl);
        if (mounted) {
          setQAs(Array.isArray(response.data.qas) ? response.data.qas : []);
        }
      } catch (err) {
        if (mounted) {
          setError('Không thể tải dữ liệu hỏi đáp.');
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

  return <List context="qas" items={qas} />;
}

QAList.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};