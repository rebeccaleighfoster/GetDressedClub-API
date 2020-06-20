DROP TABLE IF EXISTS DailyLog;

CREATE TABLE  DailyLog (
    FriendName VARCHAR NOT NULL,
    DailyLogID integer NOT NULL,
    Date date NOT NULL,
    MoveBody VARCHAR,
    GlassesWater integer,
    LeaveHouse boolean,
    WinOfDay VARCHAR,
    Shower boolean,
    CleanRoom boolean,
    DoDishes boolean,
    WashFace boolean,
    FoodDrop boolean,
    Call boolean,
    VirtualMovie boolean
)