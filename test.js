async function downloadFile(fileUrl, savePath, fileName) {
    try {
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        const finalFileName = fileName || path.basename(new URL(fileUrl).pathname);
        const finalSavePath = path.join(savePath, finalFileName);

        // Ensure the directory exists
        fs.mkdirSync(savePath, { recursive: true });

        fs.writeFileSync(finalSavePath, response.data);
        console.log('File downloaded successfully. finalSavePath: ', finalSavePath);
        return finalFileName
    } catch (error) {
        console.error('Error downloading file:', error);
        throw error;
    }
}

downloadFile(NamedNodeMap, zhangsan, lisi);
