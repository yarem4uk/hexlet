select * from courses join categories on id = id;
select * from courses where category_id in in (select id from categoies where id >30);
