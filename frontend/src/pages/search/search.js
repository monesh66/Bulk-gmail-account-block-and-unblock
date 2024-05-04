import { useEffect, useState } from 'react';
import './search.css'
import { MdOutlineSearch } from "react-icons/md";
import SearchListTable from './SearchListTable';
import { useNavigate } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";



function Search() {
    const navigate = useNavigate();

    const [searchContent, setSearchContent] = useState("");
    const [pervSearchContent, setPervSearchContent] = useState("")
    const data = [
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        {
            id: 2344,
            profile: "M",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUZUuBU5s8N6EBP_cK8Ac0wqTSD-imC2oZDiVAoXVIQnTvv7rs=s200-p",
            color: "rgb(0, 213, 0)",
            gmail: "moneshvel.al22@bitsathy.ac.in",
            name: "Moneshvel S T",
            rollNumber: "7376222AL174",
            accountStatus: "Blocked",
        },
        {
            id: 2345,
            profile: "V",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjXZxYNyNy-SKmRa3nWe0MfSFAvh0-18PDpGxCyNvDgf79jPIVQ=s200-p",
            color: "rgb(255, 0, 242)",
            gmail: "varun.cs22@bitsathy.ac.in",
            name: "Varunesh D",
            rollNumber: "7376222CS345",
            accountStatus: "Active",
        }, {
            id: 4325,
            profile: "H",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjW2aJu-mmtyQUE4-E77MxYp5vBkT0Dl8Fl3Rk4jkvh-Y2oQfN4=s200-p-k-rw-no",
            color: "rgb(0, 140, 255)",
            gmail: "harish.al22@bitsathy.ac.in",
            name: "Harish R",
            rollNumber: "7376222AL139",
            accountStatus: "Blocked",
        }, {
            id: 134,
            profile: "S",
            profileURL: "https://lh3.googleusercontent.com/a-/ALV-UjUliCL7KeVqjs22ZsyuCfYwRQe0DJCoHm6-IPwmHvSRk10CTSsv=s200-p",
            color: "rgb(255, 166, 0)",
            gmail: "saravanan.cb22@bitsathy.ac.in",
            name: "Saravanan S",
            rollNumber: "7376222CB146",
            accountStatus: "Active",
        }, {
            id: 3425,
            profile: "N",
            profileURL: "Null",
            color: "rgb(255, 0, 242)",
            gmail: "nishok.al22@bitsathy.ac.in",
            name: "Nishok T",
            rollNumber: "7376222AL668",
            accountStatus: "Active",
        }, {
            id: 5234,
            profile: "R",
            profileURL: "Null",
            color: "rgb(0, 213, 0)",
            gmail: "Ram.al22@bitsathy.ac.in",
            name: "Ram K",
            rollNumber: "7376222AL975",
            accountStatus: "Active",
        },
        
    ]
    useEffect(() => {
        if (searchContent.length < 51) {
            setPervSearchContent(searchContent)
        }
        else {
            document.getElementById("searchBar").value = pervSearchContent;
        }
    }, [searchContent])


    // loading animation
    const [isContentLoadedu, setIsContentLoadedu] = useState(false);
    const [runOnes, setRunOnes] = useState(false)
    var isContentLoaded = isContentLoadedu

    function setIsContentLoaded(value) {
        isContentLoaded = value;
        setIsContentLoadedu(true);
    }


    function loadContent() {
        if (isContentLoaded === false) {
            setTimeout(() => {
                setIsContentLoaded(true);
            }, 3000)
        }
    }

    function animateLoading() {
        var interval = 4;
        var timeLine = 0;
        var frameFront = 0;
        var frameMain = 0;
        var frameBack = 0;

        console.log("started animation...")
        const animate = setInterval(() => {
            var count = 0;
            console.log(isContentLoaded)
            if (isContentLoaded == true) {
                clearInterval(animate)
            }
            const animatedDiv = document.querySelectorAll(".contentLoadingAnimationl");
            if (animatedDiv) {
                timeLine = timeLine + interval;
                if (timeLine >= 300) {
                    timeLine = -50;
                    if (interval == 4) {
                        interval = 7
                    }
                    if (interval == 7) {
                        interval = 4
                    }
                }
                frameMain = timeLine;
                frameFront = timeLine - 40;
                frameBack = timeLine + 20;
                animatedDiv.forEach((ele) => {
                    ele.style.background = "linear-gradient(110deg, rgba(210,210,210,0.5) 0%, rgba(210,210,210,0.5) " + frameFront + "%, rgba(150,150,150,1) " + frameMain + "%, rgba(210,210,210,0.5) " + frameBack + "%, rgba(210,210,210,0.5) 100%)";
                })
            }

        }, 16);

    }


    if (runOnes === false) {
        setRunOnes(true);
        animateLoading();
        loadContent();
    }
    // loading animation end





    return (
        <div className="search">
            <div className="topnav">
                <h1>Search Gmail Account</h1>
            </div>
            <div className="mainContent">
                <div className="searchSection">
                    <div className="searchBarSection">
                        <input type="text" id='searchBar' placeholder='Search for Gmail, Name, Roll Number' onChange={(e) => { setSearchContent(e.target.value) }} />
                        <MdOutlineSearch className='searchIcon' />
                    </div>
                </div>
                <div className="searchList">
                    <div className="table">
                        <div className="tableHeader">
                            <div className="headerId">
                                <h1>ID</h1>
                            </div>
                            <div className="headerProfile">
                                <h1>Profile</h1>
                            </div>
                            <div className="headerGmail">
                                <h1>Gmail</h1>
                            </div>
                            <div className="headerName">
                                <h1>Name</h1>
                            </div>
                            <div className="headerRollNumber">
                                <h1>Roll Number</h1>
                            </div>
                            <div className="headerAccountStatus">
                                <h1>Status</h1>
                            </div>
                            <div className="headerView">
                                <h1>Details</h1>
                            </div>
                        </div>
                        {isContentLoaded ? (data.map((item) => (
                            <SearchListTable
                                //key={item.id}
                                id={item.id}
                                profile={item.profile}
                                profileURL = {item.profileURL}
                                color={item.color}
                                gmail={item.gmail}
                                name={item.name}
                                rollNumber={item.rollNumber}
                                accountStatus={item.accountStatus}
                            />
                        ))) : (
                            <>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                                <div className="contentLoadingAnimationl t1">
                                    <div className="tdId">
                                        <div className="loadingid"></div>
                                    </div>
                                    <div className="tdProfile">
                                        <div className="loadingProfile"></div>
                                    </div>
                                    <div className="tdGmail">
                                        <div className="loadingGmail"></div>
                                    </div>
                                    <div className="tdName">
                                        <div className="loadingName"></div>
                                    </div>
                                    <div className="tdRollNumber">
                                        <div className="loadingRollNumber"></div>
                                    </div>
                                    <div className="tdAccountStatus">
                                        <div className="loadingAccountStatus"></div>
                                    </div>
                                    <div className="tdView">
                                        <div className="loadingView"></div>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;