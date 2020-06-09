export const columns = [
    {
      title: 'Ad Soyad',
      dataIndex: 'ownerId.name',
    },
    { title: 'Konu', dataIndex: 'articleId.subject', key: 'articleId.subject' },
    {
      title: 'Oluşturma zamanı',
      dataIndex: 'createDateTime',
     },
  ];