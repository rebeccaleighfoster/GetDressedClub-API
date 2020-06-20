BEGIN;

INSERT INTO dailylog
    (FriendName, DailyLogID, Date, MoveBody, GlassesWater, LeaveHouse, WinOfDay, Shower, CleanRoom, DoDishes, WashFace, FoodDrop,Call, VirtualMovie) 

VALUES
    ( 'Kelsey', 1, '2008-11-11',  'i went on a run', 4, TRUE,  'I didnt push myself too hard on my run',  TRUE, TRUE, TRUE,TRUE,TRUE,TRUE,TRUE ),
    ( 'Mei', 2, '2020-06-14',  'i took bishop to the park', 4, TRUE,  'I didnt get frustrated with bishop when he wouldnt stop crying',  TRUE, TRUE, TRUE,TRUE,TRUE,TRUE,TRUE)
   