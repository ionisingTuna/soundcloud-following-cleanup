(() => {
  // Time to sleep between requests in ms
  const sleepMin = 500;
  const sleepMax = 1000;

  async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
  }

  async function unfollow() {
    const $badges = document.querySelectorAll('.userBadgeListItem');
    const badgesCount = $badges.length;

    for (let i = 100; i < badgesCount; i++) { // Skipping the first 100
      const $badge = $badges[i];
      const $title = $badge.querySelector('.userBadgeListItem__heading');
      const $button = $badge.querySelector('.sc-button-follow');

      const title = $title.innerText;

      if ($button) {
        console.log("[%s/%s] Unfollowing \"%s\"", i + 1, badgesCount, title);
        $button.click();
        await sleep(Math.floor(Math.random() * (sleepMax - sleepMin + 1)) + sleepMin);
      } else {
        console.warn("[%s/%s] Already unfollowed \"%s\"", i + 1, badgesCount, title);
      }
    }

    console.log("Done");
  }

  unfollow();
})();
