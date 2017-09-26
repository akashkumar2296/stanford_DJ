#
# IMPORTANT
#
# Please ensure you have MySQL configured to UTC, like so:
#
# [mysqld]
# default_time_zone='+00:00'
#
# You may also want to adjust the max packet size upwards if you're
# testing with MAMP, like so:
# max_allowed_packet = 64M
#

# FIXME NEEDED?

DROP TABLE IF EXISTS `Artist`;

CREATE TABLE `Artist` (
	`name` VARCHAR(20) NOT NULL PRIMARY KEY,
	`short_description` VARCHAR(20) NOT NULL,
	`photo` VARCHAR(20) NOT NULL,
	`about` VARCHAR(256) NOT NULL, 
	`cultural` VARCHAR(256) NOT NULL,
	`university` VARCHAR(256) NOT NULL
);
