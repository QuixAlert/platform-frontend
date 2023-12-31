interface ReportCard {
  userId: string,
  reportId: string
  requesterName: string,
  requesterPicturePath: string,
  responsibleName: string,
  responsiblePicturePath: string,    
  registerNumber: string,
  solicitationDate: string,
  reportPicturePath: string,
  reportAdress: string,
  openDays: string,
  status: string,
  expectedDate: string,
  title: string,
}

export default ReportCard;