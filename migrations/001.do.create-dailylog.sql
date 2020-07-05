DROP TABLE IF EXISTS DailyLog;

CREATE TABLE  DailyLog (
    friendname VARCHAR NOT NULL,
    log_id integer NOT NULL,
    date date NOT NULL,
    movebody VARCHAR,
    glasseswater integer,
    leavehouse VARCHAR,
    winofday VARCHAR,
    shower VARCHAR,
    cleanroom VARCHAR,
    dodishes VARCHAR,
    washface VARCHAR,
    fooddrop VARCHAR,
    call VARCHAR,
    distancewalk VARCHAR,
    imagename VARCHAR
)