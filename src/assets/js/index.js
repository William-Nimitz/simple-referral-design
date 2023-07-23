(function($) {
    const Referrals = {
        loading: true,
        mockData: {
            referrals: [
                {
                    logo: "./assets/img/logos/mercury.svg",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 250
                },
                {
                    logo: "./assets/img/logos/marketing-flow.svg",
                    link: "mercury.com/r/marketing-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $100.",
                    status: "Active",
                    payout: 100
                },
                {
                    logo: "./assets/img/logos/marketing-flow-1.svg",
                    link: "mercury.com/r/marketing-flow-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $450.",
                    status: "Pending",
                    payout: 450
                },
                {
                    logo: "./assets/img/logos/logo1.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 200
                },
                {
                    logo: "./assets/img/logos/logo2.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/logo4.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 210
                },
                {
                    logo: "./assets/img/logos/logo5.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/mercury.svg",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 250
                },
                {
                    logo: "./assets/img/logos/marketing-flow.svg",
                    link: "mercury.com/r/marketing-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 100
                },
                {
                    logo: "./assets/img/logos/marketing-flow-1.svg",
                    link: "mercury.com/r/marketing-flow-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 450
                },
                {
                    logo: "./assets/img/logos/logo1.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 200
                },
                {
                    logo: "./assets/img/logos/logo2.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/logo4.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 210
                },
                {
                    logo: "./assets/img/logos/logo5.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/mercury.svg",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 250
                },
                {
                    logo: "./assets/img/logos/marketing-flow.svg",
                    link: "mercury.com/r/marketing-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 100
                },
                {
                    logo: "./assets/img/logos/marketing-flow-1.svg",
                    link: "mercury.com/r/marketing-flow-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 450
                },
                {
                    logo: "./assets/img/logos/logo1.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 200
                },
                {
                    logo: "./assets/img/logos/logo2.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/logo4.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 210
                },
                {
                    logo: "./assets/img/logos/logo5.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/mercury.svg",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 250
                },
                {
                    logo: "./assets/img/logos/marketing-flow.svg",
                    link: "mercury.com/r/marketing-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 100
                },
                {
                    logo: "./assets/img/logos/marketing-flow-1.svg",
                    link: "mercury.com/r/marketing-flow-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 450
                },
                {
                    logo: "./assets/img/logos/logo1.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 200
                },
                {
                    logo: "./assets/img/logos/logo2.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/logo4.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 210
                },
                {
                    logo: "./assets/img/logos/logo5.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/mercury.svg",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 250
                },
                {
                    logo: "./assets/img/logos/marketing-flow.svg",
                    link: "mercury.com/r/marketing-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 100
                },
                {
                    logo: "./assets/img/logos/marketing-flow-1.svg",
                    link: "mercury.com/r/marketing-flow-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 450
                },
                {
                    logo: "./assets/img/logos/logo1.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 200
                },
                {
                    logo: "./assets/img/logos/logo2.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                },
                {
                    logo: "./assets/img/logos/logo4.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Active",
                    payout: 210
                },
                {
                    logo: "./assets/img/logos/logo5.png",
                    link: "mercury.com/r/macrofit-inc",
                    description: "If you referral deposites $10.000 in to their Mercury account in the first 90days, you both earn $250.",
                    status: "Pending",
                    payout: 125
                }
            ],
            shareEmails: [
                "test@test.com",
                "test1@test.com"
            ]
        },

        init: function(){
            const referralsTable = $(".referrals-table table tbody");
            const referralsContainer = $(".referrals-table");
            tbody = [1,2,3,4,5,6,7, 8, 9, 10].map(skeleton => {
                        return `<tr class="skeleton-container">
                                    <td>
                                        <div class="skeleton-row">
                                            <div class="skeleton skeleton-image"></div>
                                            <div class="compamy-info-name skeleton skeleton-text"></div>
                                        </div>
                                    </td>
                                    <td><div class="compamy-info-status skeleton skeleton-text"></div></td>
                                    <td><div class="compamy-info-payout skeleton skeleton-text"></div></td>
                                </tr>`;
                    }).join("");
            referralsTable.html(tbody);
            const alertBody = `
                    <div class="alert loading-alert">
                        <p class="h5">Accepted referrals will appear here</p>
                        <p class="loading-alert-decs mb-0">Share your referral link to get started</p>
                    </div>
                `
            referralsContainer.append(alertBody);
            setInterval(() => {
                let tbody = "";
                if (Referrals?.loading) {
                    tbody = [1,2,3,4,5,6,7, 8, 9, 10].map(skeleton => {
                        return `<tr class="skeleton-container">
                                    <td>
                                        <div class="skeleton-row">
                                            <div class="skeleton skeleton-image"></div>
                                            <div class="compamy-info-name skeleton skeleton-text"></div>
                                        </div>
                                    </td>
                                    <td><div class="compamy-info-status skeleton skeleton-text"></div></td>
                                    <td><div class="compamy-info-payout skeleton skeleton-text"></div></td>
                                </tr>`;
                    }).join("");
                    referralsTable.html(tbody);
                    const alertBody = `
                            <div class="alert loading-alert">
                                <p class="h5">Accepted referrals will appear here</p>
                                <p class="loading-alert-decs mb-0">Share your referral link to get started.</p>
                            </div>
                        `
                    referralsContainer.append(alertBody);
                    Referrals.loading = false;
                } else {
                    tbody = Referrals.mockData.referrals.slice(0, 10).map((tr, idx) => {
                        const logo = tr?.logo || "./assets/img/logos/gift.png";
                        const description = tr?.description || "company logo";
                        const link = tr?.link || "";
                        const status = tr?.status || "Active";
                        const payout = tr?.payout || "0.00";

                        return `<tr data-id="${idx}">
                                    <td>
                                        <div class="company-info-wrapper">
                                            <img class="company-info-logo" src="${logo}" alt="${description}" class="img-fluid">
                                            <p class="compamy-info-name">${link}</p>
                                        </div>
                                    </td>
                                    <td>${status}</td>
                                    <td>$${payout}</td>
                                </tr>`;
                    }).join("");
                    const referralsContainer = $(".loading-alert");
                    referralsContainer && referralsContainer.remove();
                    Referrals.loading = true;
                }
                referralsTable.html(tbody);
            }, 5000);

            $(document).on("click", ".referrals-table table tbody tr", Referrals.selectReferral);
            // $(document).on("click", ".editItem", Referrals.editItem);
        },

        selectReferral: function(e) {
            const id = $(this).data("id");
            const referral = Referrals.mockData.referrals[id];

            $(".selected-referral-payout").text(referral?.payout || "0.00");
            $(".selected-referral-description").text(referral?.description || "");
            $(".selected-referral-link").text(referral?.link || "");
        }
    };
    
	Referrals.init();
})(jQuery);