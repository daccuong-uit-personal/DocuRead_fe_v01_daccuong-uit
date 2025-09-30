import React, { useState, useEffect, memo, Suspense, lazy } from 'react';
import Container from '../../../components/layout/Container';
import Section from '../../../components/layout/Section';
import EmptyState from '../../../components/feedback/EmptyState';
import BannerSlider from '../components/BannerSlider';
import NewChapterBookList from '../components/NewChapterBookList';
import RecommendList from '../components/RecommendList';
import TopList from '../components/TopList';
import DiscussionList from '../components/DiscussionList';
import QAList from '../components/QAList';
import { homeService } from '../services/homeService';

// Lazy load các section để cải thiện hiệu suất
const LazySection = lazy(() => import('../../../components/layout/Section'));

const HomePage = () => {
  const [data, setData] = useState({
    banners: [],
    newBooks: [],
    recommendBooks: { male: [], female: [], publication: [] },
    discussions: [],
    qas: [],
  });
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [bannersRes, newBooksRes, recommendBooksRes, discussionsRes, qasRes] = await Promise.all([
          homeService.getBanners().catch(() => ({ data: [] })),
          homeService.getNewBooks().catch(() => ({ data: [] })),
          homeService.getRecommendBooks().catch(() => ({ data: { male: [], female: [], publication: [] } })),
          homeService.getDiscussions().catch(() => ({ data: [] })),
          homeService.getQAs().catch(() => ({ data: [] })),
        ]);

        if (mounted) {
          setData({
            banners: Array.isArray(bannersRes.data) ? bannersRes.data : [],
            newBooks: Array.isArray(newBooksRes.data) ? newBooksRes.data : [],
            recommendBooks: {
              male: Array.isArray(recommendBooksRes.data.male) ? recommendBooksRes.data.male : [],
              female: Array.isArray(recommendBooksRes.data.female) ? recommendBooksRes.data.female : [],
              publication: Array.isArray(recommendBooksRes.data.publication) ? recommendBooksRes.data.publication : [],
            },
            discussions: Array.isArray(discussionsRes.data) ? discussionsRes.data : [],
            qas: Array.isArray(qasRes.data) ? qasRes.data : [],
          });
          setErrors({
            banners: bannersRes.data.length === 0 ? 'Không thể tải banners.' : null,
            newBooks: newBooksRes.data.length === 0 ? 'Không thể tải sách mới.' : null,
            recommendBooks:
              recommendBooksRes.data.male.length === 0 &&
              recommendBooksRes.data.female.length === 0 &&
              recommendBooksRes.data.publication.length === 0
                ? 'Không thể tải sách đề cử.'
                : null,
            discussions: discussionsRes.data.length === 0 ? 'Không thể tải thảo luận.' : null,
            qas: qasRes.data.length === 0 ? 'Không thể tải hỏi đáp.' : null,
          });
        }
      } catch (err) {
        if (mounted) {
          setErrors({ general: 'Không thể tải dữ liệu trang chủ.' });
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
  }, []);

  if (loading) {
    return (
      <Container className="text-center p-4">
        <EmptyState message="Đang tải..." />
      </Container>
    );
  }

  if (errors.general) {
    return (
      <Container className="text-center p-4">
        <EmptyState message={errors.general} />
      </Container>
    );
  }

  return (
    <Container className="space-y-12" role="main" aria-label="Trang chủ">
      {/* Block 1: Banner + New Chapters */}
      <Suspense fallback={<EmptyState message="Đang tải banner..." />}>
        <div className="mb-6 mt-6">
          {errors.banners ? (
            <EmptyState message={errors.banners} />
          ) : (
            <BannerSlider banners={data.banners} />
          )}
        </div>
        {errors.newBooks ? (
          <EmptyState message={errors.newBooks} />
        ) : (
          <NewChapterBookList books={data.newBooks} />
        )}
      </Suspense>

      {/* Block 2: Truyện Con Trai */}
      <Suspense fallback={<EmptyState message="Đang tải truyện con trai..." />}>
        <LazySection title="Truyện Con Trai">
          {errors.recommendBooks ? (
            <EmptyState message={errors.recommendBooks} />
          ) : (
            <RecommendList type="male" books={data.recommendBooks.male.slice(0, 6)} />
          )}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TopList apiUrl="male-hot" />
            <TopList apiUrl="male-new" />
            <TopList apiUrl="male-complete" />
          </div>
        </LazySection>
      </Suspense>

      {/* Block 3: Thảo luận */}
      <Suspense fallback={<EmptyState message="Đang tải thảo luận..." />}>
        <LazySection title="Thảo luận">
          {errors.discussions ? (
            <EmptyState message={errors.discussions} />
          ) : (
            <div className="mt-6">
              <DiscussionList apiUrl="hot-discussions" />
            </div>
          )}
        </LazySection>
      </Suspense> 

      {/* Block 4: Truyện Con Gái */}
      <Suspense fallback={<EmptyState message="Đang tải truyện con gái..." />}>
        <LazySection title="Truyện Con Gái">
          {errors.recommendBooks ? (
            <EmptyState message={errors.recommendBooks} />
          ) : (
            <RecommendList type="female" books={data.recommendBooks.female.slice(0, 6)} />
          )}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TopList apiUrl="female-hot" />
            <TopList apiUrl="female-new" />
            <TopList apiUrl="female-complete" />
          </div>
        </LazySection>
      </Suspense>

      {/* Block 5: Ấn phẩm */}
      <Suspense fallback={<EmptyState message="Đang tải ấn phẩm..." />}>
        <LazySection title="Ấn phẩm">
          {errors.recommendBooks ? (
            <EmptyState message={errors.recommendBooks} />
          ) : (
            <RecommendList type="publication" books={data.recommendBooks.publication.slice(0, 6)} />
          )}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TopList apiUrl="publication-bestseller" />
            <TopList apiUrl="publication-new" />
            <TopList apiUrl="publication-graphic-novel" />
          </div>
        </LazySection>
      </Suspense>

      {/* Block 6: Hỏi đáp */}
      <Suspense fallback={<EmptyState message="Đang tải hỏi đáp..." />}>
        <LazySection title="Hỏi đáp">
          {errors.qas ? <EmptyState message={errors.qas} /> : <QAList apiUrl="hot-qas" />}
        </LazySection>
      </Suspense>
    </Container>
  );
};

export default memo(HomePage);