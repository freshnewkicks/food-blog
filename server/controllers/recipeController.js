// get home page ('index');

exports.homepage = async(req,res) => {
    await res.render('index', { title: 'Food Blog | Tyler Duke Dev' });
};