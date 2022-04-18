var Twitter = require("twitter");

var TwitterAuthKeys = [
	[
		(ConsumerKey = ""),
		(ConsumerSecret = ""),
		(TokenKey = ""),
		(TokenSecret = ""),
	],
	[
		(ConsumerKey = ""),
		(ConsumerSecret = ""),
		(TokenKey = ""),
		(TokenSecret = ""),
	],
];
var active_key = Math.floor(Math.random() * TwitterAuthKeys.length);

let next_cursor = -1;
let total_downloaded_users = 0;

getFollowersData(next_cursor);

function getFollowersData(next_cursor) {
	try {
		var client = new Twitter({
			consumer_key: TwitterAuthKeys[active_key][0],
			consumer_secret: TwitterAuthKeys[active_key][1],
			access_token_key: TwitterAuthKeys[active_key][2],
			access_token_secret: TwitterAuthKeys[active_key][3],
		});

		var params = {
			screen_name: "john",
			count: "100",
			cursor: next_cursor,
		};

		//endpoint: https://api.twitter.com/1.1/followers/list.json
		client.get("endpoint/list.json", params, function (error, data, response) {
			if (!error) {
				total_downloaded_users += data.users.length;
				console.log("total downloaded users:", total_downloaded_users);

				//get last 200 tweets for each user
				for (var i = 0; i < data.users.length; i++) {
					getUserTweets(data.users[i].screen_name);
				}
				next_cursor = data.next_cursor;

				if (next_cursor != 0) getFollowersData(next_cursor);
			} else {
				active_key++;
				if (active_key == TwitterAuthKeys.length) active_key = 0;
				console.error("token error", error);
			}
		});
	} catch (error) {
		console.error("an error occured:", error);
	}
}

function getUserTweets(screen_name) {
	try {
		console.log("getting tweets for:", screen_name);
		var client = new Twitter({
			consumer_key: TwitterAuthKeys[active_key][0],
			consumer_secret: TwitterAuthKeys[active_key][1],
			access_token_key: TwitterAuthKeys[active_key][2],
			access_token_secret: TwitterAuthKeys[active_key][3],
		});

		var params = {
			screen_name: screen_name,
			count: "200",
		};
		client.get(
			"statuses/user_timeline.json",
			params,
			function (error, data, response) {
				if (!error) {
					console.log("downloaded tweets for user:", screen_name);
					let array = [];
					// get tweets for each user
					for (var i = 0; i < data.length; i++) {
						var tweet = data[i];

						var tweet_user_screen_name = tweet.user.screen_name;
						let tweet_source = tweet.source;

						let first = tweet_source.indexOf(">");
						let second = tweet_source.indexOf("</a>");
						let string = tweet_source.slice(first + 1, second);
						array.push([screen_name, string]);

						// console.log(
						// 	"tweet_user_screen_name:",
						// 	tweet_user_screen_name,
						// 	"tweet_source:",
						// 	tweet_source
						// );
					}
					let arrayLimited = Array.from(
						new Set(array.map(JSON.stringify)),
						JSON.parse
					);

					// let arr = statusSourceIds.split("<");
					const ObjectsToCsv = require("objects-to-csv");

					new ObjectsToCsv(arrayLimited).toDisk("./test.csv", {
						append: true,
					});

					// If you use "await", code must be inside an asynchronous function:
				} else {
					active_key++;
					if (active_key == TwitterAuthKeys.length) active_key = 0;
					console.error("token error done", error);
				}
			}
		);
	} catch (error) {
		console.error("an error occured:", error);
	}
}
