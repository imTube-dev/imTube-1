///检验手机号是否有效
exports.checkMobile = (phone) => {
    return new Promise((resolve) => {
        if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(phone))) {
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tNb2JpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja01vYmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxZQUFZO0FBQ1osT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==